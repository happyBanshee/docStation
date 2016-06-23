import {Meteor} from 'meteor/meteor';
import {Router} from 'meteor/iron:router';
import {SerialPort} from 'meteor/fourquet:serialport';

var serialPort = new SerialPort.SerialPort('COM3', {
    baudrate: 9600,
    parser: SerialPort.parsers.readline('\r\n')
});
serialPort.on('open', function() {
    console.log('Port open');
});

Router.route('/log', {where: 'server'})
    .get(function(){
        var req = this.request;
        var res = this.response;
        console.log("get ",this.params.query);
        serialPort.write("flash");
        res.statusCode = 200;
        res.setHeader( 'access-control-allow-origin', '*' );
        res.end("ended");
    })
    .post(function(){
        var req = this.request;
        var res = this.response;
        console.log("post ",this.params.name);
        res.statusCode = 200;
        res.setHeader( 'access-control-allow-origin', '*' );
        res.end("ended");
    })
    .put(function(){
        var req = this.request;
        var res = this.response;
        console.log("put ",this.params.name);
        res.statusCode = 200;
        res.setHeader( 'access-control-allow-origin', '*' );
        res.end("ended");
    });
