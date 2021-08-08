var createError = require("http-errors");
var express = require("express");
var path = require("path");
var favicon = require('serve-favicon');
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//首页路由
var indexRouter = require("./routes/index");
//jade示例路由
var jadeRouter = require("./routes/jade");
//server内置路由
var apiRouter = require("./routes/api");
//示例路由
var example = require("./routes/example");

var app = express();
// 视图模板引擎设置，此框架只支持Ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
// 公共图标
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// 内置插件
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
//express jade示例
app.use("/jade", jadeRouter);
//pintuer Api 示例
app.use("/example", example);

//API帮助文档路由
app.use("/api", apiRouter);
app.use("/help", express.static(__dirname + "/public/docs/api.html"));
app.use("/tool", express.static(__dirname + "/public/tools/tool.html"));

// 捕获404错误
app.use(function (req, res, next) {
  next(createError(404));
});

// 错误处理
app.use(function (err, req, res, next) {
  // 设置只有本地才提供错误信息展示
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // 呈现错误页面
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
