const Router = require("koa-router");
const ArtileController = require("../controllers/article");

const router = new Router({
  prefix: "/api/web"
});

/**
 * 文章接口
 */
//文章列表
router.get("/article/:id", ArtileController.getArticleById);

module.exports = router;
