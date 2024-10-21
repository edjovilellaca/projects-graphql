const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {type: String, require: true},
    desc: {type: String, require: true},
    sDate: {type: Date, require: true},
    eDate: {type: Date, require: true},
    status: {type: Boolean, default: false},
    budget: {type: Number, require: true}
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
