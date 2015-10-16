# Ronin generator

This is a Yeoman generator for [Ronin](https://github.com/vdemedes/ronin) to create CLI applications.

## Installation

```
$ npm install --global yeoman generator-ronin
```

## Available commands

### Application

To create new application, run `yo ronin` with application name as an argument.

```
$ yo ronin hello-world
```

This will create a folder `hello-world` and create a base for your application.

![](http://cl.ly/image/153M3B1T3t47/embed)


### Command

To create new command inside application, run `yo ronin:command` with command name as an argument.

```
$ yo ronin:command hello
```

This will create a file `hello.js` inside `commands` directory.

![](http://cl.ly/image/0V1g3q1F0k2u/embed)

## Tests

```
$ npm test
```

## License

The MIT License (MIT) Copyright © 2014 Vadim Demedes vdemedes@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
