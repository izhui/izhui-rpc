'use strict';

let Rpc = require("../");

let client = Rpc.createClient( 'Cavacn.com@Client', 'Client客户端');

client.on('error',function(err){
    console.log('error',err);
}).on('connect',function(){
    client.ask('/demo/0.2/aaa',function(err,client){
        console.log( client ? client.serviceId : '连接失败');
    });
    // client.invoke('/demo/0.2/aaa',{ uname: 'cavacn', upass: 'cavacnpwd', age: '12'}  , console.log);
    // client.workerList(function( status, error, result ){
        // var data = result;
        // data.forEach(function(item,index){
            // client.readme(item.id,function(status,error,readme){
                // console.log(status,error,readme);
            // });
        // });
    // });
})
.connect( 8888 );