let koa = require("koa");
let router = require("koa-router")(); //引入并实例化

let app = new koa();

//ctx 上下文 content, 包含了request response等信息
//配置路由
router.get("/", async ctx => {
  ctx.body = "首页"; //返回数据
});
router.get("/news", async ctx => {
  ctx.body = "这是一个新闻";
});

router.get("/newscotent", async ctx => {
  ctx.body = "这是一个新闻详情页面";
});

app.use(async (ctx, next) => {
  next();
  if (ctx.status == 404) {
    ctx.status = 404;
    ctx.body = "这是一个404 页面";
  } else {
    console.log(ctx.url);
  }
});

//启动路由
app.use(router.routes()); //启动路由
//   .use(router.alloweMethods());

app.listen(3000, () => {
  console.log("888888888888");
});
