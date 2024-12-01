// models/artifacts.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artifactSchema = new Schema({
  artifact_type: { 
    type: String, 
    required: true 
  },
  origin: { 
    type: String, 
    required: true 
  },
  age: { 
    type: Number, 
    required: true,
    min: [100, 'Minimum age must be 100 years']
  },
});

const Artifact = mongoose.model('Artifact', artifactSchema);
module.exports = Artifact;