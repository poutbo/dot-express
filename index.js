var fs = require("fs");
var dot = module.exports = require('dot');
var dotCache = {};

dot.__express = function(path, options, fn) {
    return dotCache[path] ? fn(null, dotCache[path](options)) : fs.readFile(path, 'utf8', function(err, file) {
        if (err) {
            return fn(err);
        }
        file = file.replace(/^\uFEFF/, '');
        fn(null, (dotCache[path] = dot.template(file))(options));
    });
}