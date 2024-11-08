var express = require('express');
var router = express.Router();

/* GET artifacts page. */
router.get('/', function(req, res, next) {
    res.render('artifacts', { title: `Search Results for Artifacts` });
});

module.exports = router;
