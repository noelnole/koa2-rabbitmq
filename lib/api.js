var Router = require('koa-router');
const api = new Router();
const send = require('./send');
const receive = require('./receive');

api.get('/', async (ctx,next) => {
 ctx.body = 'Hello how are you, dude?, send a message with localhost:5000/send';
});

api.get('/send',async (ctx, next) => {
  ctx.body = await send();
});

api.get('/receiving', async (ctx,next) => {
  ctx.body = await receive();
})

//export default api; si ejecutamos con babel

module.exports = api;
