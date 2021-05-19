Branch 10a: CORS with credentials



Branch 9a: React Context API

The React Context API can be used to pass properties across the component hierarchy without having to make intermediate components aware of it (unlike the way we made components aware of authorization in the previous branch).

The app now has full authorization procedures. For example, 1. no one can create a post unless they have signed in. 2. users can only edit or delete posts that they themselves have posted, they cannot edit or delete someone elses post.



Branch 8a: Authorization-Aware UI

Branch 7a:

Signing Out + Authorization

1. Signing out now persistent after adding signout api in auth.js, and adding to the signout function in Register.jsx

2. Authorization: created a context in Apollo server which can be passed through to all resolver functions. This context contains information on whether a user is signed in or not. As this context is now passed to resolver functions, we can forbid the functions to be carried out if a user is not signed in. This is a start to implementing authorization throughout our app.




Branch 6a: 

JSON Web Tokens

The goal of this branch is to make user signin persist across browser refreshes. We did this using JSON Web Tokens.

On the api side installed cookie-parser and jsonwebtoken.

The biggest changes were made to auth.js, with also some changes made to Register.jsx.

This completes persistence of signin, although now persistence of signing out is an issue! The next branch will sort that out.



Branch 5a: branch 4a dealt with authentication, this branch deals with authoization.
1. Installed NPM modules google-auth-library and body-parser on the api side. Created new file auth.js on the api side.
2. 'Verifying the google token'

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