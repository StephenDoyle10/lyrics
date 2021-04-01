const fs = require('fs');
const { ApolloServer } = require(`apollo-server-express`);
const issue = require('./issue.js');

const resolvers = {
    Query: {
        greetingList: issue.list
        
    },
    Mutation: {
        greetingAdd: issue.add,
        greetingUpdate: issue.update,
        greetingDelete: issue.remove,
    },
};

const server = new ApolloServer({
    typeDefs: fs.readFileSync('./schema.graphql', 'utf-8'),
    resolvers: resolvers,
})

function installHandler(app) {
server.applyMiddleware({ app, path: '/graphql' });
}

module.exports = { installHandler }