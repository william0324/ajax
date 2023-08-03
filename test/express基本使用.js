//1引入express
const express = require('express');

//2创建应用对象
const app = express();

//3.创建路由规则
app.get('/',(request,response)=>{
    response.send('HELLO Express');
})
//4.监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动");
})