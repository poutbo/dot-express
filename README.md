dot-express
============

doT stub for Express 4.x with caching and layout support.

## Install

Install original repository

```
$ npm install dot-express --save
```

##Setup

```
// load express doT
var doT = require('dot-express');
app.set('view engine', 'dotjs');
app.engine('.dotjs', doT.__express);
```
