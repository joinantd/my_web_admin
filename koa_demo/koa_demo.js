let koa = require("koa");
let router = require("koa-router")(); //引入并实例化

let app = new koa();
// let router = new Router();  手动实例化

//ctx 上下文 content, 包含了request response等信息
//配置路由
router
  .get("/", async ctx => {
    ctx.body = "首页"; //返回数据
  })
  .get("/newscotent", async ctx => {
    ctx.body = "这是一个新闻详情页面";
  });

//获取get传值
router.get("/", async ctx => {
  console.log(ctx.query); //获取的是对象
  console.log(ctx.querystring);

  //从ctx中的request里面获取get值
  console.log(ctx.request);
  //获取url地址
  console.log(ctx.url);
  ctx.body = "这是一个新闻页面";
});

//koa中间件
/**匹配任何路由 如果不写next，路由匹配到后就停止 */
// app.use(async ctx => {
//   ctx.body = "这是一个中间件";
// });
app.use(async (ctx, next) => {
  ctx.body = "这是一个中间件";
  await next(); /**当前路由匹配完成以后继续向下匹配 */
});

//启动路由
app.use(router.routes()); //启动路由
//   .use(router.alloweMethods());

app.listen(3000, () => {
  console.log("888888888888");
});
