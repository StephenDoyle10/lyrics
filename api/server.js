const express = require("express");
const { connectToDb } = require("./db.js");
const fs = require("fs");
const { ApolloServer } = require(`apollo-server-express`);
const resFun = require("./resolverFunctions.js");
const cookieParser = require("cookie-parser");
const auth = require("./auth.js");

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

app.use("/auth", auth.routes);

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
  context: getContext,
});

function installHandler(app) {
  const enableCors = (process.env.ENABLE_CORS || "true") === "true";
  console.log("CORS setting:", enableCors);
  let cors;
  if (enableCors) {
    console.log("1");
    const origin = process.env.UI_SERVER_ORIGIN || "http://localhost:8000";
    const methods = "POST";
    cors = { origin, methods, credentials: true };
    console.log("2");
  } else {
    cors = "false";
  }
  server.applyMiddleware({ app, path: "/graphql", cors });
  console.log("3");
}

installHandler(app);

const port = process.env.PORT;

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

