Branch 4:

In this branch we started on something very important for full stack projects, especially those that have CRUD capabilities: the ability for users to create an account and signin. Without this, anyone visiting the site can delete or edit anyone elses content, rendering websites with CRUD capabilities essentially useless.

Adding this feature is a long and involved process. In this branch we set up the API and UI that allows a user to create an account (we will deal with signing in to a pre-existing account in a later branch).

On the API side we added a userAdd mutation type to the schema and the resolvers. With this, when a user inputs a username and password and clicks submit, that data is send to a new MongoDB colelction called 'users'.

However, for security reasons, it is bad practice to store the actual password in the database. Rather, the password should be hashed before it is sent to the database. bcrypt is a popular package to help with this. We installed bcrypt and used it in the resolver function to hash the password, and it is a hashed version of the password that is sent to the MongoDB collection.

On the UI side we created a register form in which users can input a username and password (a 'confirm password' input is also included, so that user dosn't make a mistake with the password).




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