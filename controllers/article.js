const ArticleSevice = require("../service/article");

class articleController {
  static async getArticleById(ctx) {
    let id = ctx.params.id;
    if (id) {
      try {
        // 查询文章详情模型
        let data = await ArticleSevice.getArticleListById(id);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: "查询成功",
          data
        };
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: "查询失败",
          data
        };
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: "文章ID必须传"
      };
    }
  }
}

module.exports = articleController;
