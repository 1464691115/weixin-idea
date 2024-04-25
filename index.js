#!/usr/bin/env node

const path = require("path");

function run(params) {
  //TODO kesen: 2022-04-22  打开微信开发工具
  if (process.env.Path) {
    let e = "";
    process.env.Path.split(";").every(el => (el.includes("微信web开发者工具") ? (e = el) : true));

    e = e.replace(/(([A-Z]|[a-z])\:.*微信web开发者工具).*/g, "$1");
    const weixin = "/d" + e;
    const { exec } = require("child_process");

    startWxIDE();
    let time;

    function startWxIDE() {
      console.log("如无反应请检查开发工具安全->服务端口是否开启");

      const self_env = { development: "dev", production: "build" }[process.env.NODE_ENV] || "dev";
      const self_project_url = path.resolve(
        process.cwd(),
        params || `./dist/${self_env}/mp-weixin`
      );

      exec(`cd ${weixin} && cli open --project ${self_project_url}`, err => {
        if (err) {
          console.log("启动失败，正在重新启动...", e);
          console.error(err);
          time = setTimeout(startWxIDE, 10000);

          return;
        }
        console.log(`微信开发者工具启动成功! ${self_project_url}`);
        clearInterval(time);
      });
    }
  }
}

module.exports = (ctx, options) => {
  ctx.onBuildStart(() => {});
  ctx.onBuildFinish(() => {});
  ctx.onBuildComplete(() => {
    console.log("Taro 构建完成！");
    run(options.path);
  });
};

