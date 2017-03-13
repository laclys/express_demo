//引入框架
const express = require('express');
const static = require('express-static');
//搭建服务器
let server = express();
//设置端口监听
server.listen(2333);
//设置中间件
// server.get();
// server.post();
// server.use();
server.get('/a',(request, response)=> {
    // let json = {
    //     'name': 'zyy',
    //     'age': '25'
    // };
    // response.send(json);
    // response.end(); 
    console.log(request.query);
});
//设置静态文件权限
server.use(static('www'));