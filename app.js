/**
 * ejs模板引擎使用
 */
let koa = require("koa");
let router = require("koa-router")(); //引入并实例化
let views = require("koa-views");
let bodyparser = require("koa-bodyparser");
let cors = require("koa-cors");

let app = new koa();

let article = require("./routes/article");
let user = require("./routes/user");

app.use(
  views("views", {
    extension: "ejs" //第一种、应用ejs模板引擎
  })
);

router.get("/news", function(ctx, next) {
  ctx.body = "this is a get1 response!";
});

//配置中间件
app.use(bodyparser());

//跨域问题
app.use(cors()); //使用cors

//启动路由
app.use(router.routes()); //启动路由
//   .use(router.alloweMethods());

//文章路由
app.use(article.routes());
//用户
app.use(user.routes());

app.listen(3000, () => {
  console.log("888888888888");
});
