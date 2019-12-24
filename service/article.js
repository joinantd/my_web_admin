const mysql = require("../lib/mysql");
class ArticleSevice {
  /**
   * 查询文章的详情
   * @param id 文章ID
   */
  static async getArticleListById(id) {
    // return await mysql.getArticleListById(id);
    let resultData = await mysql.getArticleListById(id);
    return resultData;
  }
}

module.exports = ArticleSevice;
