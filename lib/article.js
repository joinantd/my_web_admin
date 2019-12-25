let query = require("./common.js");

/**
 * 文章详情
 * @param {*} value 
 */
let getArticleListById = value => {
  let _sql = "select * from cs_article where articleId = ?";
  return query(_sql, value);
};

module.exports = {
  getArticleListById
};
