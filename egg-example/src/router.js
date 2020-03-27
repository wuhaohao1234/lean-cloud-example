const Router = require('@koa/router');
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'hello'
});
router.get('/title', (ctx, next) => {
    ctx.body = 'title'
});
module.exports = router