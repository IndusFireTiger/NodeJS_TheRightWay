"use strict";
const
    net = require('net'),
    server = net.createServer(function(connection){
        console.log("well")
    })
server.listen(9000)
console.log('listening to 9000...')