const Router = require("koa-router");
const UserController = require("../controllers/user.js");

const router = new Router({
  prefix: "/api/user"
});

router.post("/login", UserController.login);

module.exports = router;
