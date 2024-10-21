const projectService = require('../services/projectService');
const resolvers = {
    Query: {
        projects: ()=>{
            return projectService.getAllProjects();
        }
    },
    Mutation: {
        createProject: (_, { name, desc, sDate, eDate, budget }) => {
            return projectService.createProject(name, desc, sDate, eDate, budget);
        },
        updateProject: (_, { _id, updates }) => {
            return projectService.updateProject(_id, updates);
        },
        deleteProject: (_, {_id})=>{
            return projectService.deleteProject(_id);
        } 
    }
};

module.exports = resolvers;