Branch 4a:
1. We created a new component called Register.jsx. This contained a signin button. This component contains a user object as state. The user object has two properties, signedIn (either true or false) and givenName (the signed in user's name). If signedIn is 'true' then a welcome message to the user is rendered. If signedIn is 'false' then a sign in button is rendered.

This component was added to GreetingsParent.jsx so that it is displayed at the top of the webpage when loaded.

2. Added UI_API_ENDPOINT and GOGGLE_CLIENT_ID as ui environmental variables, and set up a function in the UI server, so that these variables could be accessed by components.

3. Added a componentDidMount method to Register.jsx which initialises the Goggle library when the component is first used. Then added to the signin function so that user is taken to Google authorization popup when they click signin button, which asks them for their gmail and password. If they sucessfully complete this, they the popup disappears, and instead of the signin button at the top of the page, there is a personalised message welcoming the user.

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