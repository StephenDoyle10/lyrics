const express = require("express");
const { connectToDb } = require("./db.js");
const fs = require("fs");
const { ApolloServer } = require(`apollo-server-express`);
const resFun = require("./resolverFunctions.js");
const cookieParser = require('cookie-parser');
const auth = require('./auth.js');



require("dotenv").config();

const resolvers = {
    Query: {
      lyricpostsList: resFun.list,
    },
    Mutation: {
      lyricPostAdd: resFun.add,
      lyricPostUpdate: resFun.update,
      lyricPostDelete: resFun.remove,
      userAdd: resFun.userAdd,
    },
  };

const app = express();

app.use(cookieParser());
app.use('/auth', auth.routes);





/*
app.use(
  expressSession({
    name: 'qid',
    secret: "keyboard cat",
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false,
      
      maxAge: 3600000,
    },
  })
);
*/


/*
function getContext({req}){
    
    return req
}
*/

function getContext({ req }) {
  const user = auth.getUser(req);
  return { user };
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync("./schema.graphql", "utf-8"),
  resolvers: resolvers,
  //makes playground interface available on deployed app, which is turned off by default:
  playground: true,
  introspection: true,
  /*context: ({req})=>
  console.log(req.headers.authorization),*/
  context: getContext,
  });

function installHandler(app) {
  server.applyMiddleware({ app, path: "/graphql" });
}

installHandler(app);

const port = process.env.API_SERVER_PORT;

(async function () {
  try {
    await connectToDb();

    app.listen(port, function () {
      console.log(`App started on port ${port}`);
    });
  } catch (err) {
    console.log("ERROR:", err);
  }
})();

