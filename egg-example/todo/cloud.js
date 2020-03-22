var AV = require('leanengine');

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('hello', function(request) {
  return 'Hello world!';
});
// 在项目的 cloud.js 文件中新增一个云函数定义
AV.Cloud.define('createTask', async (request) => {
  const Todo = AV.Object.extend('Task');
  const todo = new Todo();
  todo.set('content', request.params.content);
  return todo.save();
});