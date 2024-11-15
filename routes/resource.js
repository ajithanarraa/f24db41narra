const express = require('express');
const router = express.Router();
module.exports = router;

// Require controller modules
const api_controller = require('../controllers/api');
const artifact_controller = require('../controllers/artifact');  // Changed from heritageSite_controller to artifact_controller

/// API ROUTE ///
// GET resources base
router.get('/', api_controller.api);

/// ARTIFACT ROUTES ///
// POST request for creating an Artifact
router.post('/artifacts', artifact_controller.artifact_create_post);  // Changed from heritageSite_create_post to artifact_create_post

// DELETE request to delete an Artifact
router.delete('/artifacts/:id', artifact_controller.artifact_delete);  // Changed from heritageSite_delete to artifact_delete

// PUT request to update an Artifact
router.put('/artifacts/:id', artifact_controller.artifact_update_put);  // Changed from heritageSite_update_put to artifact_update_put

// GET request for one Artifact
router.get('/artifacts/:id', artifact_controller.artifact_detail);  // Changed from heritageSite_detail to artifact_detail

// GET request for list of all Artifacts
router.get('/artifacts', artifact_controller.artifact_list);  // Changed from heritageSite_list to artifact_list

module.exports = router;
