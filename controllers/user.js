const UserService = require("../service/user.js");

class UserControllers {
  static async login(ctx) {
    let users = {
      username: ctx.request.body.username,
      password: ctx.request.body.password
    };
    if (ctx.request.body.username) {
      try {
        let data = await UserService.login(users.username);
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
        msg: "请输入用户名或密码123123131"
      };
    }
  }
}
module.exports = UserControllers;
