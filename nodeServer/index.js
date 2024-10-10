//node server for handl socketIO connections

const { Socket } = require('socket.io');

const io=require('socket.io')(8000)

const users = {};

io.on('connection',Socket =>{
    Socket.on('new-user-joined',name =>{
        users[Socket.id]=name;
        Socket.brodcast.emit('user-joined',name);
        });

    Socketocket.on('send',message =>{
        Socket.brodcast.emit('receive',{message:message,name:users[Socket.id]});
    });

})

