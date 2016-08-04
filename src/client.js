
const request = require('superagent');

request
    .get('localhost:3000/query')
    .query({name: 'Manny'})
    .end((err, res) => {
        console.log(res.body)
    });

request
    .get('localhost:3000/params/sss')
    .end((err, res) => {
        if (err || !res.ok) {
            console.log('Oh no! error ' + res.text);
        } else {
            console.log('yay got ' + JSON.stringify(res.text));
        }
    });

request
    .post('localhost:3000/header')
    // .set('Content-Type', 'application/json')
    .set({name: "123"})  //必须设置头字段，如果用send发送的是body主体，服务器端只能通过.body获取参数
    .end((err, res) => {
        if (err || !res.ok) {
            console.log('Oh no! error ' + res.text);
        } else {
            console.log('yay got ' + res.text);
        }
    });

request
    .post('localhost:3000/user')
    .type('form')
    .send({name: 'manny'})
    .end((err, res) => {
        if (err || !res.ok) {
            console.log('Oh no! error ' + res.text);
        } else {
            console.log('yay got ' + JSON.stringify(res.text));
        }
    });

request
    .post('localhost:3000/json')
    .set('Content-Type', 'application/json')
    .send('{"name":"tj","pet":"tobi"}')
    .end((err, res) => {
        if (err || !res.ok) {
            console.log('Oh no! error ' + res.text);
        } else {
            console.log('yay got ' + JSON.stringify(res.text));
        }
    });

