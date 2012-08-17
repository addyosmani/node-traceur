# Traceur for node

This project provides an up to date version of the [Traceur](http://code.google.com/p/traceur-compiler/) module for node, originally by @aikar. Changes have been made to account for API updates to Traceur over the past year.

## Install

Installation is pretty straight-forward. To globally install, just use:

```
$ sudo npm install -g
```

## Quick start (binaries)

Once installed, you can `require("traceur")` easily and then:

* Create a parser tree using `traceur.outputgeneration.TreeWriter.write`
* Compile using `traceur.codegeneration.Compiler.compile()`
* or do whatever else you need to with Traceurs APIs

The traceurc node binary is an excellent example of how to consume Traceur from node, demonstrating file compilation, capturing the output from Traceur which can then be written anywhere you wish and more.

You can also use Traceur to consume modules with ES6 syntax as follows:

```
require("traceur");
var Foo = require('./foo.js');
var instance = new Foo;
instance.bar();
```

To compile a directory using a binary with ```require()``` for the Traceur runtime:

```
traceurc input output
```

e.g to compile the examples provided simply run:

```
traceurc examples/example2 examples/output2
``` 

Note: this is not the same as simply using the command-lines tools Traceur comes with. See [bin/traceurc](https://github.com/addyosmani/traceur/blob/master/bin/traceurc).


## About
Traceur provides support for Googles Traceur project which adds many enhanced
features to the JavaScript language. For full details on what all Traceur does,
visit [http://code.google.com/p/traceur-compiler/wiki/LanguageFeatures](http://code.google.com/p/traceur-compiler/wiki/LanguageFeatures).



## Usage (from original project)

Traceur module provides 2 binaries:

`traceur app.js`:
This binary will execute node but all require() statements can make use of
traceur syntax. Note that startup will be slow as the source code is transformed!

This is the same thing as calling require('traceur') then requiring your file.

`traceurc inputdir/ outputdir/`: this command takes a directory and finds every
.js file in the directory and compiles it with traceur then writes it in the same
dir format as input, to the output dir. 

A small runtime library is created at
outputdir/node_modules/traceur-runtime.js that is auto loaded by all modules.

You may need to add this to your package.json so npm won't ignore it.


## License

> The MIT License
>
>  Copyright (c) 2011 Daniel Ennis <aikar@aikar.co>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
