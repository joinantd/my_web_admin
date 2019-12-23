let koa = require("koa");
let bodyParser = require("koa-bodyparser");
let app = new koa();
app.use(bodyParser());

const router = require("koa-router")({
  prefix: "/api"
});
router.get("/", async (ctx, next) => {
  // todo
});
app.use(router.routes());

app.listen(3000, () => {
  console.log("888888888888");
});
