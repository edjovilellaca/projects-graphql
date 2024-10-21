const {gql} = require('apollo-server');

const typeDefs = gql`
    type Project {
        _id: ID!
        name: String!
        desc: String!
        sDate: String!
        eDate: String!
        status: Boolean!
        budget: Float!
    }

    type Query {
        projects: [Project]!
    }

    input UpdateProjectInput {
        name: String
        desc: String
        sDate: String
        eDate: String
        status: Boolean
        budget: Float
    }

    type Mutation {
        createProject(name: String!, desc: String!, sDate: String!, eDate: String!, budget: Float!): Project!
        updateProject(_id: ID!, updates: UpdateProjectInput!): Project!
        deleteProject(_id: ID!): Project!
    }
`

module.exports = typeDefs;
