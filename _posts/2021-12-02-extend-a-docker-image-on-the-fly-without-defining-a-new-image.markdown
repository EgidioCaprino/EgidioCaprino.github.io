---
layout: post
title:  "Extend a Docker image on the fly, without defining a new image"
date:   2022-10-16 11:40:41 +0200
# categories: jekyll update
---
If you want to use a particular Docker image but you need to apply some changes to it, the correct way to go is to extend that image and build your own on top of it. So basically, you will have to create a new `Dockerfile` with `FROM: alpine` or whatever is your source image, followed by a set of instructions where you apply the customization you need in your image. For instance, you could install your application executable and all the dependencies it needs.

## But what if you don't want to create a new Docker image?
In some situations, it doesn't make much sense to extend an existing image. For instance, for a personal use application (**not a production one**) that you don't want to maintain, where all the customization you need is installing one or two additional packages. In that case, it would be easier to just install the packages and then run the command the image is meant to run by default. But first, let's give a look at the `docker run` command.

This is what the official documentation tells us:

```
docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]
```

The `COMMAND` option allows us to specify an optional command to run when the container starts. For instance, if we want to spawn a new container and get a shell for testing, we could do the following.

```
docker run -it --rm alpine sh
```

It will spawn a new container in interactive mode and once it's up it will run the `sh` command. So this is a good way to test the commands we want the container to run. Once we know the commands, we could add them to a script like this.

```
#/usr/bin/env sh

apk add s-nail
sh
```

Let's name it `start.sh` and don't forget to make this script executable: `chmod +x start.sh`. Also, remember to replace the Shebang line `#/usr/bin/env sh` with the most suitable one for your image. For instance, if you're not using Apline but another image with Bash, you may want to replace it with `#/usr/bin/env bash`.

So now we could mount this script and pass its path to the `COMMAND` option when running `docker run`.

```
docker run -it -v "$(pwd)/start.sh":/start.sh alpine /start.sh
```

Now we get a shell, as before, but before that the container will install S-nail. We're almost there.

Probably we don't want to get an interactive shell, but rather execute the default command the image was meant to run. For instance, if that container is a Nextcloud instance, we want it to start Nextcloud when we do `docker run`. But what's the command for that?

In general, when a container starts, it will run the `CMD` specified in the `Dockerfile`. The most accurate way to find it is

* to go to [Docker Hub](https://hub.docker.com/),
* search for your image,
* open the Tags tab,
* select the exact version you want to use, or `latest` otherwise,
* on the left, search for the latest occurrence of the `CMD` definition.

That's the command you want to append to your `start.sh` script instead of the `sh` one. For instance, for [this Nextcloud image](https://hub.docker.com/layers/nextcloud/library/nextcloud/stable-fpm-alpine/images/sha256-5aded1c55b126768ed6f54c5ff30b4622432198905b47f12c052d87d9cb6131e?context=explore), the command the container will run by default is `php-fpm`.
