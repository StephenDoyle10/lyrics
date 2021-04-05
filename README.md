Branch 3:

Up until now, we have had zero styling in our project and instead have been focusing on backend, APIs, project architecture, and so on. In this branch we connected a CSS stylesheet to the project (although at the moment the stylesheet is largely empty).

This is how you use CSS stylesheets with a React project:

first you have to install style-loader and css-loader as dev dependencies:

cd ui

npm install --save-dev css-loader

npm install --save-dev style-loader

Then, in the ui webpack.config.js file, add the following under module>rules:

{
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  },

Now we can add an App.css file in ui/src which can contain all our css code.

So that a component can access this css file, add "import './App.css';" to component code.


Branch 2:

This project began by cloning a bare bones MERN project that I had created previously (see branch 01, which is a clone from here: https://github.com/StephenDoyle10/Guestbook). This project contained CRUD capabilities: users were allowed to create posts that contained a message and their name. However, in this project users will be creating posts with song lyrics, song name, artist name and their own name. The schema, resolvers and the UI were altered to reflect these changes.