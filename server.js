'use strict';

const koa = require('koa');
var router = require('koa-router')();

const send = require('./lib/send');
const receive = require('./lib/receive');
const api = require('./lib/api');

const app = new koa()



app
  .use(router.routes())
  .use(api.routes())
  .use(router.allowedMethods());

app.listen(5000);
console.log("Listen in port 5000");


//RabbitMQhttp://localhost:15672/#/connections
//pwd guest
//user guest
