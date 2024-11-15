var express = require('express');
var router = express.Router();

// Example route for artifact
router.get('/', (req, res) => {
  res.send('Artifacts page');
});

router.get('/artifact/:id', (req, res) => {
    const artifactId = req.params.id;
    res.send(`Artifact with ID: ${artifactId}`);
  });
  
module.exports = router;
