const prisma = require('../lib/db');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', async function (req, res, next) {

  res.status(200).json({
    status: true,
    data: "ok waaa"
  })
});

module.exports = router;
