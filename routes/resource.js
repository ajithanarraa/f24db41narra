var express = require('express');
var router = express.Router();

// Require controller modules
var api_controller = require('../controllers/api'); // Ensure this path is correct
var artifact_controller = require('../controllers/artifact'); // Ensure this path is correct

// API Route
router.get('/', api_controller.api); // This should call the api function defined in api.js
// GET artifacts page, using the controller method to render all artifacts
router.get('/', artifact_controller.artifact_view_all_Page);
// Artifact Routes
router.post('/artifact', artifact_controller.artifact_create_post);
router.delete('/artifacts/:id', artifact_controller.artifact_delete);
router.put('/artifacts/:id', artifact_controller.artifact_update_put);
router.get('/artifacts/:id', artifact_controller.artifact_detail);
router.get('/artifacts', artifact_controller.artifact_list);

module.exports = router;
