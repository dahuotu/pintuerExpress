var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json({
    msg: '首页设置信息需要自己调整路由'
  });
});

module.exports = router;