var Router = require('koa-router');
const api = new Router();
const send = require('./send');
const receive = require('./receive');

api.get('/', async (ctx,next) => {
 ctx.body = 'Hello how are you, dude?, send a message with localhost:5000/send';
});

api.get('/send',async (ctx, next) => {
//  ctx.body = 'hola';
  ctx.body = await send();
});

//export default api; si ejecutamos con babel

module.exports = api;
