// controllers/artifactsController.js
const Artifact = require('../models/artifacts');

// // List all artifacts (already implemented)
// exports.artifact_list = async function(req, res) {
//   try {
//     const artifacts = await Artifact.find();
//     res.json(artifacts);
//   } catch (err) {
//     res.status(500).send({ error: 'Failed to fetch artifacts' });
//   }
// };

// List of all artifacts
exports.artifact_list = async function(req, res) {
 try{
 theartifacts = await Artifact.find();
 res.send(theartifacts);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 } 
};

// VIEWS
// Handle a show all view
exports.artifact_view_all_Page = async function(req, res) {
 try{
 theartifacts = await Artifact.find();
 res.render('artifacts', { title: 'artifact Search Results', results: theartifacts });
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 } 
};

// Handle artifact create on POST.
exports.artifact_create_post = async function(req, res) {
 console.log(req.body)
 let document = new Artifact();
 // We are looking for a body, since POST does not have query parameters.
 // Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
 // {"artifact_type":"goat", "cost":12, "size":"large"}
 document.artifact_type = req.body.artifact_type;
 document.origin = req.body.origin;
 document.age = req.body.age;
 try{
 let result = await document.save();
 res.send(result);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 } 
};


// // Create a new artifact (already implemented)
// exports.artifact_create_post = async function(req, res) {
//   try {
//     const { artifact_type, origin, age } = req.body;
//     if (!artifact_type || !origin || !age) {
//       return res.status(400).json({ message: "All fields (artifact_type, origin, age) are required" });
//     }
//     const newArtifact = new Artifact({ artifact_type, origin, age });
//     const savedArtifact = await newArtifact.save();
//     res.status(201).json(savedArtifact);
//   } catch (err) {
//     res.status(500).json({ message: `Error: ${err.message}` });
//   }
// };


// for a specific artifact.
exports.artifact_detail = async function(req, res) {
  console.log("detail" + req.params.id)
  try {
  result = await Artifact.findById( req.params.id)
  res.send(result)
  } catch (error) {
  res.status(500)
  res.send(`{"error": document for id ${req.params.id} not found`);
  }
 };



// // Get details of a specific artifact by ID
// exports.artifact_detail = async function(req, res) {
//   try {
//     const artifact = await Artifact.findById(req.params.id);
//     if (!artifact) {
//       return res.status(404).json({ message: "Artifact not found" });
//     }
//     res.status(200).json(artifact);
//   } catch (err) {
//     res.status(500).json({ message: `Error: ${err.message}` });
//   }
// };


//Handle artifact update form on PUT.
exports.artifact_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await artifact.findById( req.params.id)
 // Do updates of properties
 if(req.body.artifact_type) 
 toUpdate.artifact_type = req.body.artifact_type;
 if(req.body.origin) toUpdate.origin = req.body.origin;
 if(req.body.age) toUpdate.age = req.body.age;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
 }
};


// // Update an existing artifact by ID
// exports.artifact_update_put = async function(req, res) {
//   try {
//     let artifact = await Artifact.findById(req.params.id);
//     if (!artifact) {
//       return res.status(404).json({ message: "Artifact not found" });
//     }

//     if (req.body.artifact_type) artifact.artifact_type = req.body.artifact_type;
//     if (req.body.origin) artifact.origin = req.body.origin;
//     if (req.body.age) artifact.age = req.body.age;

//     const updatedArtifact = await artifact.save();
//     res.status(200).json(updatedArtifact);
//   } catch (err) {
//     res.status(500).json({ message: `Error: ${err.message}` });
//   }
// };

// Delete an artifact by ID
exports.artifact_delete = async function(req, res) {
  try {
    const deletedArtifact = await Artifact.findByIdAndDelete(req.params.id);
    if (!deletedArtifact) {
      return res.status(404).json({ message: "Artifact not found" });
    }
    res.status(200).json({ message: "Artifact deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: `Error: ${err.message}` });
  }
};
