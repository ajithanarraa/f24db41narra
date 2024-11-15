const Artifact = require('../models/artifact');  // Assuming Artifact model is created

// List all artifacts
exports.artifact_list = async function (req, res) {
  try {
    const artifacts = await Artifact.find();
    res.send(artifacts);
  } catch (err) {
    res.status(500).send({ "error": err.message });
  }
};

// View all artifacts (render view)
exports.artifact_view_all_Page = async function (req, res) {
  try {
    const results = await Artifact.find();
    res.render('artifacts', { title: 'Artifacts', results: results });
  } catch (err) {
    res.status(500).send(`{"error": ${err}}`);
  }
};

// Get artifact details by ID
exports.artifact_detail = async function (req, res) {
  try {
    const artifact = await Artifact.findById(req.params.id);
    if (!artifact) return res.status(404).send('Artifact not found');
    res.send(artifact);
  } catch (err) {
    res.status(500).send({ "error": err.message });
  }
};

// Create new artifact
exports.artifact_create_post = async function (req, res) {
  try {
    const artifact = new Artifact({
      artifactName: req.body.artifactName,
      origin: req.body.origin,
      age: req.body.age,
    });
    const result = await artifact.save();
    res.send(result);
  } catch (err) {
    res.status(500).send({ "error": err.message });
  }
};

// Update an artifact
exports.artifact_update_put = async function (req, res) {
  try {
    const artifact = await Artifact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(artifact);
  } catch (err) {
    res.status(500).send({ "error": err.message });
  }
};

// Delete an artifact
exports.artifact_delete = async function (req, res) {
  try {
    await Artifact.findByIdAndDelete(req.params.id);
    res.send('Artifact deleted');
  } catch (err) {
    res.status(500).send({ "error": err.message });
  }
};
