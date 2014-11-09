A simple nodejs using express api in a docker container.

This dockerfile or this container is dependent on an existing 
nodejs docker container. You can find URL to the dockerfile to 
build nodejs container https://github.com/lenfree/nodejs-docker.

Usage:
========

```shell``
# cd nodejs-express-docker && docker build -t nodejs_express .`
# docker run -d -p 8080:8080 nodejs_express
```

```shell```
# curl  http://192.168.59.105:8080/myfile1
this is myfile 1
```
