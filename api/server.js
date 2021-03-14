const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const fs = require('fs');

let aboutMessage = "Guest Book API v1.0";

const greetingsData = [
    {
      id: 1,
      message: `d morning, and in case I don't see ya, good afternoon, good evening and good night!`,
      name: "Truman Burbank",
    },
    {
      id: 2,
      message: `Hello, my name is Inigo Montoya. You killed my father. Prepare to die.`,
      name: "Inigo Montoya",
    },
    { id: 3, message: "Hello there", name: "Obi-Wan Kenobi" },
  ];


const resolvers = {
    Query: {
        about: () => aboutMessage,
        greetingList,
    },
    Mutation: {
        setAboutMessage,
    },
};

function setAboutMessage(_, { message }) {
    return aboutMessage = message;
}

function greetingList(){
    return greetingsData;
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync('./schema.graphql', 'utf-8'),
    resolvers,
})

const app = express();

server.applyMiddleware({ app, path: '/grahql' });

const port = 5000;

app.listen(port, function() {
    console.log(`App started on port ${port}`)
})