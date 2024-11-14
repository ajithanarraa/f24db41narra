const mongoose = require("mongoose");

const artifactSchema = mongoose.Schema({
    artifactName: String,
    origin: String,
    age: Number
});

module.exports = mongoose.model("Artifact", artifactSchema);
