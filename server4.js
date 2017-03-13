//引入框架
const express = require('express');
const static = require('express-static');
// const body = require('body-parser');
//搭建服务器
let server = express();
//设置端口监听
server.listen(2333);
//设置中间件
// server.use(body.urlencoded());
server.get('/sum', (request, response) => {
    let json = JSON.stringify(request.query);
    json = JSON.parse(json);
    console.log(json);
    console.log(typeof json['n1']);
    console.log(typeof (json['n2'] - 0));
    let n1 = json['n1'] - 0;
    let n2 = json['n2'] - 0;
    console.log(n1);
    console.log(n2);
    // let sum=parseInt(json.n1)+parseInt(json.n2);
    let sum = n1 + n2;
    sum = sum + '';
    response.send(sum);
    response.end();
});
//设置静态文件权限
server.use(static('www')); 