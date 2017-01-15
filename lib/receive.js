'use strict';

const co = require('co');
const amqpConn = require('../config/mq');

module.exports = function () {

  return co(function* () {
    console.log("before channel");
    const channel = yield amqpConn().createChannel();

    const q = 'hello';
    yield channel.assertQueue(q);
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    var msg;
    var msga = yield channel.consume(q, msg);
    console.log("mensaje pillado",msga);
    channel.close();

    return `Sent ${msg}`;

  }).catch(err => {
    return `Error: ${err}`;
  });

}
