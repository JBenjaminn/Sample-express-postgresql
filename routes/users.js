var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', async (req, res, next) => {
  try {
    const result = await db.query("select * from books");
    return res.send(result.rows)
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
