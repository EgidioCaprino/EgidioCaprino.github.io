---
layout: post
title:  "Secure your business website for free"
---
If your business website offers an intranet area protected by authentication or exchanges sensible data with the user,
then it is critical for you to serve it over _https_ protocol rather than plain _http_. The reason is that in _https_
the communication between the client and server is encrypted. The _https_ protocol also ensures the user about the
authenticity of the website, so they won't be afraid of who they are sending their credentials to.

To secure your business website in _https_, you need to have an SSL certificate emitted by a certification authority
(CA). This is a trusted third-party entity that will ensure the user about the authenticity of your website.

Once the CA has released the certificate, you need to set up your webserver adding the entry for the _https_ connection.
It is also important to edit the configuration for the plain _http_ connection by setting up a redirect to the secure
protocol. In this way, when a user tries to visit your website over _http_ they will be immediately redirected over
_https_.

The emission of a trusted SSL certificate has a cost that depends on the type of the certificate. This cost includes
the CA taxes and the service of the certificate provider. But there is now a way to have a valid and fully trusted SSL
certificate for free.

_Let's Encrypt_ is a non-profit Certification Authority that emits SSL certificates for free. It also offers a command
line tool, _certbot_, for automatically emitting and renewing the certificates that you need for your websites.

This completely cuts off all the recurring costs for securing your business website and it also simplifies the process
of emitting, installing and renewing the SSL certificates.
