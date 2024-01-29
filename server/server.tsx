const express = require('express');
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const auth = require('./models/auth.tsx');

const http = require('http');
const server = http.createServer(app);

app.use(bodyParser.urlencoded({extended:true})); //extended 옵션의 경우, true일 경우, 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용한다는 말이며, false인 경우에는 허용하지 않는 의미
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "*" }));

require("./routes/routes.tsx")(app);

const io = require('socket.io')(server,  { cors: { origin: '*' } });

io.on('connection', (socket) => {
    socket.on('send message',(item)=>{
            const message = "message : " + item.msg;
            console.log(message);
            io.emit("receive message", { msg: item.msg });  //"receive message"라는 이벤트 발생
    })

    socket.on("disconnect", function () {
            console.log("user disconnected: ", socket.id);
    });
});

server.listen(port, ()=>{
    console.log('connect');
})

