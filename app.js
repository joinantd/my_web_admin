/**
 * ejs模板引擎使用
 */
let koa = require("koa");
let Koa_Session = require("koa-session");
let router = require("koa-router")(); //引入并实例化
let views = require("koa-views");
let bodyparser = require("koa-bodyparser");
let cors = require("koa-cors");

const session_signed_key = ["some secret hurr"]; // 这个是配合signed属性的签名key
const session_config = {
  key: "koa:sess" /**  cookie的key。 (默认是 koa:sess) */,
  maxAge: 4000 /**  session 过期时间，以毫秒ms为单位计算 。*/,
  autoCommit: true /** 自动提交到响应头。(默认是 true) */,
  overwrite: true /** 是否允许重写 。(默认是 true) */,
  httpOnly: true /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。  (默认 true) */,
  signed: true /** 是否签名。(默认是 true) */,
  rolling: true /** 是否每次响应时刷新Session的有效期。(默认是 false) */,
  renew: false /** 是否在Session快过期时刷新Session的有效期。(默认是 false) */
};

let app = new koa();
const session = Koa_Session(session_config, app);
app.keys = session_signed_key;

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

app.use(session);

//启动路由
app.use(router.routes()); //启动路由
//   .use(router.alloweMethods());

//文章路由
app.use(article.routes());
//用户
app.use(user.routes());

app.listen(8088, () => {
  console.log("888888888888");
});
