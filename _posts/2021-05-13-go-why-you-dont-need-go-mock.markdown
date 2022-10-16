---
layout: post
title:  "Go: why you don't need GoMock"
date:   2022-10-16 08:53:00 +0000
category: blog
---
GoMock is an official command-line tool for generating mocks to use in unit tests. It's very powerful, but it still requires you to apply some changes to your code, and so very often you don't need it. Let's see what GoMock does.

## How GoMock works
Firstly, you define an interface for what you want to mock. For instance, if you want to mock the HTTP client you will define the following interface.
```go
type HTTPClient interface {
    Do func(request *http.Request) (*http.Response, error)
}
```
Then you define a concrete implementation to use at runtime, for instance `http.DefaultClient`. GoMock will create for you the mocked instance to use during tests.
Now your real function, the one you want to test, needs access to an `HTTPClient`, whether it is mocked or not. How are we going to pass it? You can add an argument to the real function, using a default value if `nil` is passed.
```go
func FetchProducts(category string, httpClient *HTTPClient) {
    if httpClient == nil {
        httpClient = http.DefaultClient
    }
}
```
In this case, our concrete implementation comes from the standard library. But you could have to define your own.

Another option for passing an `HTTPClient` to our concrete function is to define a package-global variable and initialize it in the `init` function.
```go
var httpClient HTTPClient

func init() {
    httpClient := http.DefaultClient
}

func FetchProducts(category string) {
    ....
    response, err := httpClient.Do(request)
    ....
}
```
In this way, our `FetchProducts` doesn't need an extra parameter so I find this solution cleaner. On the other hand, some developers like to define a different package name when testing. In that case, you'll have to export this package-global variable (making it uppercase: `var HttpClientInstance HTTPClient`). This makes it a little bit less clean because your package should export only what's needed and in this case, it's exporting a member that's needed only for testing. Anyway, it's up to you to decide what option is better in your case. Let's move on.

Now you can mock the `HTTPClient` with GoMock. Open a terminal, [install GoMock](https://github.com/golang/mock#installation) if you haven't done it already and give the following command to generate the mock `HTTPClient`.
```shell
mockgen -destination=mocks/mock_http_client.go -package=mocks github.com/EgidioCaprino/mymodule/mypackage HTTPClient
```
Some details:
- `github.com/EgidioCaprino/mymodule/mypackage` is the package where GoMock should look for the things your want to mock,
- `HttpClient` is the thing you want to mock,
- `-destination=mocks/mock_http_client.go` is the file where you want GoMock to write the mocked implementation,
- `-package=mocks` is package name used in the new file.

You can use the auto-generated mock in your test in this way.
```go
func TestFetchProducts(t *testing.T) {
    // Create a mock request and a mock response
    ....

    controller := gomock.NewController(t)
    defer controller.Finish()
    mockHTTPClient := NewMockHTTPClient(controller)
    mockHTTPClient
        .EXPECT()
        .Do(mockRequest)
        .Return(mockResponse)
    FetchProducts(mockHTTPClient)
}
```

## How to do it without GoMock
So GoMock creates an implementation of your service where you can do assertions like *"it's been called 1 time"*, *"with these arguments"* and *"provide this value when called"*. Everything it's awesome, but the main point is that you still need to update your code so it can switch between concrete and mock. So, if you have to make your code less clean and don't have particular needs (explained later), why you can't simply define a mocked value at test-runtime, depending on your test case?

You can define an interface as before, but I think that often it's easier to just define a function, especially if you prefer functional programming. Let's try it.
```go
var DoHTTPRequest func(request *http.Request) (*http.Response, error)
```
This is just the definition of a function that makes HTTP requests. You could make it package-private if you want, depending on whether you're going to use a different package name in your tests or not.

Then, as before, you can add an extra argument to your function or define a package-global variable and initialize it in the `init` function.
```go
// Extra argument version
func FetchProducts(category string, doHTTPRequest DoHTTPRequest) {
    ...
    response, err := doHTTPRequest(request)
    ....
}

// Package-global variable version
var doHTTPRequest DoHTTPRequest

init() {
    doHTTPRequest := http.DefaultClient.Do
}

func FetchProducts(category string) {
    ...
    response, err := doHTTPRequest(request)
    ....
}
```

`FetchProducts` works as before. Now, in your tests, you simply define an inline function before invoking `FetchProducts`.
```go
func TestFetchProducts(t *testing.T) {
  // Control flag to assert the mocked function is called
  doHTTPRequestInvoked := false

  // Update package-global variable; you may need to pass doHTTPRequest to FetchProducts otherwise
  doHTTPRequest = func(request *http.Request) (*http.Response, error) {     
    doHTTPRequestInvoked = true     
    
    // Check whether the request is correct and provide a mock response
    ....
  }
  
  products, err := FetchProducts()
  assert.True(t, doHTTPRequestInvoked)
  
  // Other assertions
  ....
}
```

In each test case you can define different implementations, depending on the scenario you want to test. For instance, do you want to test a network error?
```go
func TestFetchProducts(t *testing.T) {
   doHTTPRequestInvoked := false

   doHTTPRequest = func(request *http.Request) (*http.Response, error) {
      doHTTPRequestInvoked = true

      return nil, errors.New("network error")
   }

   _, err = FetchProducts()

   assert.True(t, doHTTPRequestInvoked)
   assert.NotNil(err)
}
```
Or maybe you want to test a successful request with a particular response body?
```go
func TestFetchProducts(t *testing.T) {
    doHTTPRequestInvoked := false
    
    doHTTPRequest = func(request *http.Request) (*http.Response, error) {
        doHTTPRequestInvoked = true
    
        body := "response body in here"
        response := http.Response{
            StatusCode: http.StatusOK,
            Body:       ioutil.NopCloser(strings.NewReader(body)),
        }
        return &response, nil
    }
    
    products, _ = FetchProducts()
    
    assert.True(t, doHTTPRequestInvoked)
    
    // Check FetchProducts handles correctly the response
    ....
}
```

I feel in most cases this is the simplest solution, but there are some limitations. By default, the `go test` command may run tests for different packages in parallel as well. How this affects our mocks? It depends on your mocking strategy.

If you're adding an extra argument to the function you want to test, you'll be thread-safe in all cases. This is because in your tests you're creating a different mock for each test case.

But what if you're opting for the strategy with a package-global variable? If this variable is unexported, your code will be thread-safe as long as you're not running tests in parallel within a single package, which is the default behavior (check out the `-parallel n` argument of `go test`). Otherwise, if you're exporting that variable, *your code won't be thread-safe* in case you're mocking that same variable in tests from different packages. That's because each thread will write to the same variable at the same time.
