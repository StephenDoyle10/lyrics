const fs = require('fs');
const { ApolloServer } = require(`apollo-server-express`);
const resFun = require('./resolverFunctions.js');

const resolvers = {
    Query: {
        lyricpostsList: resFun.list
        
    },
    Mutation: {
        lyricPostAdd: resFun.add,
        lyricPostUpdate: resFun.update,
        lyricPostDelete: resFun.remove,
        userAdd:resFun.userAdd,
    },
};

const server = new ApolloServer({
    typeDefs: fs.readFileSync('./schema.graphql', 'utf-8'),
    resolvers: resolvers,
    //makes playground interface available on deployed app, which is turned off by default:
    playground: true,
    introspection: true,
})

function installHandler(app) {
server.applyMiddleware({ app, path: '/graphql' });
}

module.exports = { installHandler }