'use strict';

const AV = require('leanengine');
const Router = require('koa-router');

const router = new Router();

const Todo = AV.Object.extend('Todo');


// 查询 Todo 列表
router.get('/todo', async function(ctx) {
  ctx.state.title = 'TODO 列表';
  const query = new AV.Query(Todo);
  query.descending('createdAt');
  ctx.body = await query.find()
});

// // 新增 Todo 项目
// router.post('/', async function(ctx) {
//   const content = ctx.request.body.content;
//   console.log(content);
//   ctx.body = content;
//   var todo = new Todo();
//   todo.set('content', content);
//   await todo.save();
//   ctx.redirect('/todos');
// });

module.exports = router;
