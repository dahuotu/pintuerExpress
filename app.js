var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//首页路由
var index = require('./routes/index');
//爬虫采集路由
var request = require('./routes/request');
//示例路由
var example = require('./routes/example');
//其他业务路由
var comments = require('./routes/comments');


var app = express();
// 视图模板引擎设置，此框架只支持Ejs
app.set('views', path.join(__dirname, 'views'));
// 注释favicon.ico 公共图标，否则会提示错误
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
//示例路由
app.use('/example', example);
//爬虫采集
app.use('/request', request);
//API帮助文档路由
app.use('/help', express.static(__dirname + '/public/docs/api.html'));
app.use('/tool', express.static(__dirname + '/public/tools/tool.html'));
//其他业务路由
app.use('/comments', comments);

// 捕获404错误
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// 错误处理
app.use(function (err, req, res, next) {
  // 设置只有本地才提供错误信息展示
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // 呈现错误页面
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;