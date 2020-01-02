const UserService = require("../service/user.js");

class UserControllers {
  static async login(ctx) {
    let users = {
      username: ctx.request.body.username,
      password: ctx.request.body.password
    };
    if (users.username && users.password) {
      await UserService.login(users)
        .then(data => {
          if (
            data[0].username === users.username &&
            data[0].password === users.password
          ) {
            // localStorage.setItem("username", username);
            // console.log(localStorage.getItem("username"));
            ctx.session.username = users.username;
            console.log("namename", ctx.session.username);
            ctx.response.status = 200;
            ctx.body = {
              code: 200,
              msg: "查询成功",
              data: data[0]
            };
            console.log();
          } else {
            ctx.response.status = 200;
            ctx.body = {
              code: 201,
              msg: "用户名或密码错误"
            };
          }
        })
        .catch(err => {
          ctx.response.status = 412;
          ctx.body = {
            code: 412,
            msg: "查询失败"
          };
        });
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: "请输入用户名或密码"
      };
    }
  }
}
module.exports = UserControllers;
