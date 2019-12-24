/**
 * ejs模板引擎使用
 */
let koa = require("koa");
let router = require("koa-router")(); //引入并实例化
let views = require("koa-views");
let bodyparser = require("koa-bodyparser");
let cors = require("koa-cors");

let app = new koa();

let index = require("./routes/index");

app.use(
  views("views", {
    extension: "ejs" //第一种、应用ejs模板引擎
  })
);

router.get("/", async ctx => {
  ctx.body = "首页";
});

//ctx.request.body获取表单提交数据
router.post("/doadd", async ctx => {
  console.log(ctx.request.body);
  ctx.body = ctx.request.body;
});

//配置中间件
app.use(bodyparser());

//跨域问题
app.use(cors()); //使用cors

//启动路由
// app.use(router.routes()); //启动路由
// //   .use(router.alloweMethods());
app.use(index.routes());

app.listen(3000, () => {
  console.log("888888888888");
});
