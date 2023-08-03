//1引入express
const express = require('express');

//2创建应用对象
const app = express();

//3.创建路由规则
app.get('/server',(request,response)=>{
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    response.send('HELLO Express');
})

app.post('/server',(request,response)=>{
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin","*");
    //设置响应体
    response.send('HELLO Express post');
})
app.all('/json-server',(request,response)=>{
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin","*");
    
    //响应一个数据
    const data = {
        name : 'kkkkkk'
    };
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
})
app.get('/ie',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    //设置响应体
    response.send('HELLO Express');
})
app.all('/axio-server',(request,response)=>{
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader('Access-Control-Allow-Headers','*');

    response.send('HELLO Express');
})
//4.监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动");
})