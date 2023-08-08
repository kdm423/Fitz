# Fitz
&nbsp;&nbsp;&nbsp;&nbsp; This project is an Instagram-styled web application with a focus on fashion and style trends. Users will be able to create posts that feature their outfits, along with links to where each clothing product was purchased. Other features include the ability to follow accounts, like, and comment on posts. Competitions are held for users to win prizes! This web application aims to connect fashion enthusiasts in order to discover new styles.

&nbsp;&nbsp;&nbsp;&nbsp; The development of this project will undergo two different phases. The first phase will consist of account creation with some of its relevant functions such logging in and creating posts. This portion will mainly be constructed by Wesley. Katarina will be responsible for developing a voting operation that includes a form of reward system. The second phase is what will bring the application together. Wesley will further incorporate the use of authorization to allow users to edit their posts and contests, including interactions between them such as a comment section. Katarina will finish off the contest segment by allowing users to enter their posts, display these in a tournament style during the voting process.

&nbsp;&nbsp;&nbsp;&nbsp; A more detailed outline including specific components that will be implemented along with API logic can be found under the Fitz Final Project pdf. This file also includes a basic diagram explaining the intended features of our application and some references and inspiration.

## Phase 1
&nbsp;&nbsp;&nbsp;&nbsp; In the first implementation of our project, we started off with the basics of a user profile. This was carried out in the form of allowing new users to register a new account (with their email, desired username, and password) and existing users to log in with their corresponding username and password. Upon logging in, users are taken to their personal profile where they are able to create and view their own posts. Creating a new post invovles entering a caption and an image URL. When viewing their posts, users will see the username of the creator, the image, a caption, and comment section. All of the data for users and posts are stored in a MongoDB for easy retrieval. Some new features outside of the original plan also came into play such as the ability to logout.

## Phase 2
&nbsp;&nbsp;&nbsp;&nbsp; The second developement consisted of the ability to actually add comments to posts. Comments now show up under each post along with the username of who commented it. As far as contests go, users can now create contests and view them, along with which posts have been entered in them. While there is some backend code that allows users to enter their posts into the contests, unfortunately, we found ourselves lacking the time to implement this feature on the frontend. However, as an added bonus, we decided to create a feed page, that fetches all posts from every user so that there is still a viable form of interaction until the contest system can be polished off. The navigation of our application has been cleaned up with a link for User Profile, Feed Page, and Contests constantly being displayed at the top of the website along with a logout button. 

## Running the Application
&nbsp;&nbsp;&nbsp;&nbsp; To start this project:
* Download the code on your local machine
* Ensure all dependencies are downloaded and the latest versions are installed
* Run "npm start" in the root folder (Fitz) in order to run the entire application
* The frontend and backend can be started separately with "npm run start-frontend" and "npm run start-backend", respectively.

## Team Information
* [Wesley Blair](https://github.com/wvblair5)  
&nbsp;&nbsp;Email: wvb6@nau.edu
* [Katarina Marsteller](https://github.com/kdm423)  
&nbsp;&nbsp;Email: kdm423@nau.edu
