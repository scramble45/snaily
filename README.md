# snaily
 an express powered node module that will tail -f files under linux

Usage:
You must specify the path you want express to run on, the file to tail and the color.

~~~~
var snaily = require('snaily');

snaily.tail('/webpage1', '/yourfile.log', '\x1b[36m%s\x1b[0m');
~~~~

ex. http://127.0.0.1:4001/webpage1


more colors:
~~~~
color_red       = '\x1b[31m%s\x1b[0m',
color_green     = '\x1b[32m%s\x1b[0m',
color_yellow    = '\x1b[33m%s\x1b[0m',
color_blue      = '\x1b[34m%s\x1b[0m',
color_magenta   = '\x1b[35m%s\x1b[0m',
color_cyan      = '\x1b[36m%s\x1b[0m';
~~~~
