'use strict';

const co = require('co');
const amqpConn = require('../config/mq');

module.exports = function () {

  return co(function* () {


    console.log("Sending message");
    const msg = 'Message in a bottle.';

    const channel = yield amqpConn().createConfirmChannel();
    // not recommended - sent to queue direct
    const q = 'hello';
    yield channel.assertQueue(q);
    channel.sendToQueue(q, new Buffer(msg));


    yield channel.waitForConfirms();
    channel.close();
    console.log("Mensaje es",msg);
    return `Sent ${msg}`;

  }).catch(err => {
    return `Error: ${err}`;
  });

}
