// artifact.js in controllers
var Artifact = require('../models/artifact');

// List of all Artifacts
exports.artifact_list = async function(req, res) {
    try {
        const artifacts = await Artifact.find();  // Fetch all artifacts from the database
        res.send(artifacts);  // Send the list as JSON
    } catch (err) {
        res.status(500);
        res.send(`{"error": "${err}"}`);
    }
};

// VIEWS
// Handle a show all view for artifacts
exports.artifact_view_all_Page = async function(req, res) {
    try {
        const results = await Artifact.find();  
        res.render('artifacts', { title: 'Artifact Search Results', results: results });
    } catch (err) {
        res.status(500);
        res.send(`{"error": "${err}"}`);
    }
};


exports.artifact_create_post = async function (req, res) {
    console.log(req.body);
    
    let document = new Artifact();  // Create a new Artifact instance
    document.artifactName = req.body.artifactName;  // Set artifact name
    document.origin = req.body.origin;  // Set origin
    document.age = req.body.age;  // Set age
  
    try {
      let result = await document.save();  // Save the new artifact to the database
      res.send(result);  // Send the saved document as response
    } catch (err) {
      res.status(500).send({ "error": `${err}` });  // Handle any errors during the save operation
    }
  };

  
exports.artifact_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Artifact detail: ' + req.params.id);
};


exports.artifact_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Artifact delete DELETE ' + req.params.id);
};

exports.artifact_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Artifact update PUT ' + req.params.id);
};
