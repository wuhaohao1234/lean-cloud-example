const Koa = require('koa');
const router = require('./router')
const path = require('path')
const static = require('koa-static')


const app = new Koa();
app
  .use(static(path.join(__dirname, 'public')))
  .use(router.routes())
  .listen(3000)