const Project = require('../models/projectModel');

module.exports = {
    getAllProjects: async () => {
        return await Project.find();
    },

    createProject: async (name, desc, sDate, eDate, budget) => {
        const project = new Project({name, desc, sDate, eDate, budget});
        return await project.save();
    },

    updateProject: async (_id, updates) => {
        const updatedProject = await Project.findByIdAndUpdate(_id, updates, { new: true });
        if (!updatedProject) {
            throw new Error(`Proyecto with id ${_id} no encontrado`);
        }
        return updatedProject;
    },

    deleteProject: async (_id) =>{
        const deletedProject = await Project.findByIdAndDelete(_id);
        if (!deletedProject) {
            throw new Error(`Proyecto con id ${_id} no encontrado`);
        }
        return deletedProject;
    }
}