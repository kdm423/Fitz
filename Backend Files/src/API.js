// import express from "express";
// import cors from "cors";
// import "./connect.js";
// import { v4 } from "uuid";
// import { registerUser, loginUser, getUsers, deleteUser } from "../services/UserService.js"
// import { createPost, getPosts, getUserPosts, deletePost } from "../services/PostService.js";

// const app = express();

// app.use(express.json());

// app.use(cors());

// // Register new user
// app.post('/register', async (request, response) => {
//     let { email, username, password } = request.body;

//     try {
//         await registerUser(email, username, password);

//         response
//             .status(201)
//             .send({message: "user successfully registered: " + username})
//     } catch (error) {
//         response
//             .status(500)
//             .send({message: "error occured while registering user"})
//     }
// });

// // Login existing user
// app.post('/login', async (request, response)  => {
//     try {
//         let { username, password } = request.body;

//         const user = await loginUser(username, password);

//         response
//             .status(200)
//             .send({ message: "Login successful", user });
//     } catch (error) {
//         response
//             .status(401)
//             .send({ message: "Invalid  credentials" });
//     }
// });

// // Get all users information --- testing purposes
// app.get("/getAllUsers", async function (request, response){
//     try {
//         const users = await getUsers();

//         response
//             .status(200)
//             .send({ data: users })
//     } catch (error) {
//         response
//             .status(500)
//             .send({ message: "error occured while retrieving users" })
//     }
// });

// // Delete user --- currently just for testing, may become an actual feature later on
// app.delete("/deleteUser", async function(request, response){
//     try {
//         const { id } = request.body;

//         await deleteUser(id);

//         response
//             .status(200)
//             .send({message: "user successfully deleted"})
//     } catch (error) {
//         response
//             .status(500)
//             .send({message: "error occured while deleting user"})
//     }
// });

// // Create post
// app.post('/createPost', async function (request, response){
//     let {username, image, caption, comments} = request.body;

//     let unique_id = v4();

//     try {
//         await createPost(username, image, caption, comments, unique_id);

//         response
//             .status(201)
//             .send({message: "post successfully created with id:" + unique_id})
//     } catch (error) {
//         response
//             .status(500)
//             .send({message: "error occcured while creating post"})
//     }
// });

// // Get all posts
// app.get("/getAllPosts", async function (request, response){
//     try {
//         const posts = await getPosts();

//         response
//             .status(200)
//             .send({ data: posts })
//     } catch (error) {
//         response
//             .status(500)
//             .send({message: "error occured while getting posts"})
//     }
// });

// // Get posts for specific user
// app.get("/getUserPosts", async (request, response) => {
//     try {
//         const { username } = request.query;

//         const userPosts = await getUserPosts(username);

//         response
//             .status(200)
//             .send({ data: userPosts })
//     } catch (error) {
//         response
//             .status(500)
//             .send({ message: 'error fetching user posts' })
//     }
// });

// // Hard delete of post --- currently just for testing, might implement in Phase 2
// app.delete("/deletePost", async function(request, response){
//     try {
//         const { id } = request.body;

//         await deletePost(id);

//         response
//             .status(200)
//             .send({message: "post successfully deleted"})
//     } catch (error) {
//         response
//             .status(500)
//             .send({message: "error occured while deleting post"})
//     }
// });

// let PORT = 4000;

// app.listen(PORT, function () {
//     console.log("API running at port", PORT);
//   });
