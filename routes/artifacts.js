var express = require('express');
var router = express.Router();

// Example route for artifact
router.get('/', (req, res) => {
  res.send('Artifacts page');
});

module.exports = router;
