'use strict';
const Rpc = require("../");

let worker = Rpc.createWorker( 'demo2', '测试案例2');

worker.on('/:name',function( request, callback){
    callback( 200, null, request );
})
.on('error',function( err ){
    console.log('error',err);
})
.on('connect',function(){
    // console.log('connect');
    let self = this;
    setInterval(function(){
        self.remoteInvoke('/demo/hello',{ uname: Date.now(), upass: Date.now(), age: '12' },console.log);
    },1000);
})
.listen( 5002 )
.connect( 8888 ); 