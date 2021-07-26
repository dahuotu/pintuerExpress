var express = require('express');
var router = express.Router();

/* 请求jade界面 */
router.get('/', function(req, res, next) {
  res.send('返回了jade界面');
});

module.exports = router;
