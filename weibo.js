const express = require('express');
const static = require('express-static');
let server = express();
server.listen(2333);
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4210',
    database: 'weibo'
});
// db.query("SELECT * FROM liuyanban",function(err,data){
//     console.log(err,data);
//     console.log(data[0].user);
// });
// var arr = [];
var id = 0;
server.get('/add', (request, response) => {
    id++;
    var time = Math.floor(Date.now() / 1000);
    var json = request.query;
    // arr.push({
    //     id: id,
    //     user: json['user'],
    //     content: json['content'],
    //     time: time
    var sql = `INSERT INTO liuyanban VALUES (${id}, '${json['user']}', '${json['content']}', '${time}')`;
    console.log(sql);
    db.query(sql, function (err, data) {
        console.log(data);
    });
    response.send({
        state: 0,
        data: {
            time: time,
            id: id
        }
    });
});

server.get('/getCon', (request, response) => {
    db.query("SELECT * FROM liuyanban", function (err, data) {
        // console.log(err, data);
        // console.log(data[0].user);
        response.send({
            state: 0,
            data: data
        });
    });


});
server.get('/dele', (request, response) => {
    var json = request.query;
    console.log(json);
    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i].id == json.id) {
    //         arr.splice(i, 1);
    //     }
    // }
    var sql = `DELETE FROM liuyanban WHERE id='${json.id}'`;
    console.log(sql);
    db.query(sql, function (err, data) {
        console.log(data);
    });
    response.send({
        state: 0
    });
});
//设置静态文件权限
server.use(static('www'));