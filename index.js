// Rowan Hamilton
// snaily.js
// 2016

var express     = require('express'),
    app         = express(),
    port_num    = 4001,
    spawn       = require('child_process').spawn;



var createTail = function (endpoint, filetotail, color){
    app.get(endpoint, function(req, res) {
        res.header('Content-Type','text/plain');
        var tail = spawn('tail', ['-f', filetotail]);
        tail.stdout.on('data', function(data) {
            res.write(data, 'utf-8');
            console.log('Logging for:', endpoint);
            console.log(color, data.toString(), '\r\n');
        });
        tail.stderr.on('data', function(data) {
            console.log('Logging for:', endpoint);
            console.log('stderr:', data);
            res.write(data, 'utf-8');
        });
        tail.on('exit', function(code) {
            console.log('child exited with code:', code);
            res.end(code);
        });
    });
}

exports.tail = function(endpoint, logpath, color) {
    createTail(endpoint, logpath, color);
}

app.listen(port_num);
console.log('Server PID:', process.pid, '| Running on:', port_num);
