# How To

## Installation

> git clone git@github.com:daffl/jqueryto.git

> cd jqueryto

> git submodule update --init --recursive

## Simple demos

Run Underscore tests on PhantomJS:

> testee underscore/test/index.html

On Firefox:

> testee underscore/test/index.html --browser firefox

With different outputs:

> testee underscore/test/index.html --browser firefox --reporter Dot

> testee underscore/test/index.html --browser firefox --reporter XUnit > testresults.xml

With code coverage:

> testee underscore/test/index.html --browser firefox --reporter Dot --coverage

## Browserstack

Needs [Localtunnel](http://progrium.com/localtunnel/) installed when not specifying another tunelling service
(tries to install it but will possibly fail).

> testee underscore/test/index.html --browser ie:9.0@win --launch browserstack

With configuration:

```js
{
    "tunnel": {
        "type": "browserstack",
        "key": "<your command line key>"
    },
    "launch": "browserstack",
    "browser": {
        "browser": "ie",
        "version": "10.0",
        "os": "win"
    }
}
```

## Mobile testing

Run [remote-preview](http://viljamis.com/blog/2012/remote-preview/) (the video from their website is a great demo
what it can do) install and start a local HTTP server:

> sudo npm install http-server -g

> http-server

On the mobile device go to `http://<your-host>:8080/remote-preview`.

Use a configuration file like (e.g. `testee-remote.json`):

```js
{
	"tunnel": {
		"type": "local",
		"hostname": "192.168.1.64"
	},
	"launch": "remotePreview",
	"browser": {
		"file": "remote-preview/url.txt"
	}
}
```

Run

> testee underscore/test/index.html underscore/test/index.html --config testee-remote.json
