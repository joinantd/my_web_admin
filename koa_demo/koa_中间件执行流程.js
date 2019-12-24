/**
 * 洋葱圈式执行流程
 */

let koa = require("koa");
let router = require("koa-router")(); //引入并实例化

let app = new koa();

app.use(async (ctx, next) => {
  console.log("1、这是中间件1111");
  next();
  console.log("5、匹配完成后返回执行中间件");
});

app.use(async (ctx, next) => {
  console.log("2、这是中间件2");
  next();
  console.log("4、匹配完成后返回执行中间件");
});

router.get("/", async ctx => {
  ctx.body = "首页";
});

router.get("/news", async ctx => {
  ctx.body = "这是一个新闻";
  console.log("3、匹配news路由");
});

router.get("/newscotent", async ctx => {
  ctx.body = "这是一个新闻详情页面";
});

//启动路由
app.use(router.routes()); //启动路由
//   .use(router.alloweMethods());

app.listen(3000, () => {
  console.log("888888888888");
});
