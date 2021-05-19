const fs = require('fs');
const { ApolloServer } = require(`apollo-server-express`);
const resFun = require('./resolverFunctions.js');
const auth = require('./auth.js');

const resolvers = {
    Query: {
        lyricpostsList: resFun.list
        
    },
    Mutation: {
        lyricPostAdd: resFun.add,
        lyricPostUpdate: resFun.update,
        lyricPostDelete: resFun.remove,
    },
};

function getContext({ req }) {
    const user= auth.getUser(req);
    return { user };
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync('./schema.graphql', 'utf-8'),
    resolvers: resolvers,
    context: getContext,
    //makes playground interface available on deployed app, which is turned off by default:
    playground: true,
    introspection: true,
})

function installHandler(app) {
    const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
    console.log('CORS setting:', enableCors);
    let cors;
    if (enableCors) {
        console.log("yes");
        const origin = process.env.UI_SERVER_ORIGIN || 'http://localhost:8000';
        const methods = 'POST';
        cors = {origin, methods, credentials: true};
    } else {
        cors = 'false'
    }
server.applyMiddleware({ app, path: '/graphql', cors });
}

module.exports = { installHandler }