/**
 * ejs模板引擎使用
 */
let koa = require("koa");
let router = require("koa-router")(); //引入并实例化
let views = require("koa-views");
let bodyparser = require("koa-bodyparser");

let app = new koa();

//配置模板引擎  第三方中间件
// app.use(views("views", { map: { html: "ejs" } })); //第二种、应用ejs模板引擎(模板配置名后缀为.html)

app.use(
  views("views", {
    extension: "ejs" //第一种、应用ejs模板引擎
  })
);

router.get("/", async ctx => {
  ctx.body = "首页";
});

//配置中间件
app.use(bodyParser());

//启动路由
app.use(router.routes()); //启动路由
//   .use(router.alloweMethods());

app.listen(3000, () => {
  console.log("888888888888");
});
