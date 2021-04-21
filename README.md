App available to visit online here: http://ui.lyricstoliveby.tk

Branch 6: 

In this branch, we introduced React Context API. This was very useful as with this, every component knows the details of the user who is signed in. We can alter the behaviour of the component (usually with 'if statements') depending on if a user is signed in or not, and depending on which user is signe in. For example, if joebloggs@gmail.com is signed in, the lyric post that was created by user joebloggs@gmail.com will have edit and delete posts, whereas posts not created by joebloggs@gmail.com will not have any such buttons (as we do not want this user to be able to edit or delete other peoples posts, only his own).

We also got this app ready for deployment on heroku, and indeed we did deploy on heroku. available here - http://ui.lyricstoliveby.tk 

Branch 5:

In this branch we deleted the changes in the previous branch. In that branch, we moved towards authentication and authorization using a username and password. Instead, we will have authentication and authorization using Google APIs, ie allowing a user to sign in with their gmail address and password.

We have come some way towards this (Chapters 14.1- 14.7 in Subramanian book). By this stage, a user can sign in via gmail. If the user is signedin, then they are able to edit and delete posts. If not, edit and delete buttons are hidden.

Next step is to use React Context so that every component is aware if the user is signed in or not, and every component knows which user is signed in. 

Branch 4:

In this branch we started on something very important for full stack projects, especially those that have CRUD capabilities: the ability for users to create an account and signin. Without this, anyone visiting the site can delete or edit anyone elses content, rendering websites with CRUD capabilities essentially useless.

Adding this feature is a long and involved process. In this branch we set up the API and UI that allows a user to create an account (we will deal with signing in to a pre-existing account in a later branch).

On the API side we added a userAdd mutation type to the schema and the resolvers. With this, when a user inputs a username and password and clicks submit, that data is send to a new MongoDB colelction called 'users'.

However, for security reasons, it is bad practice to store the actual password in the database. This is because if someone manages to hack/ break into the database, they have access to everyone's passwords. Rather, the password should be hashed before it is sent to the database. bcrypt is a popular package to help with this. We installed bcrypt and used it in the resolver function to hash the password, and it is a hashed version of the password that is sent to the MongoDB collection.

On the UI side we created a register form on the homepage in which users can input a username and password (a 'confirm password' input is also included, so that user dosn't make a mistake with the password).

So with these additions, the user can register an account, although the functionality of the site remains the same, whether the user has an account or not. The next step would be to make the site read-only for people who are just visiting who do not have an account, while people who have logged in can create posts, and edit and delete them.


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