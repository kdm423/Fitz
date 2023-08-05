import { UserModel } from "../models/UserModel.js";

const registerUser = async (email, username, password) => {
    let userDoc = new UserModel({
        email: email,
        username:  username,
        password: password,
    });

    const result = await userDoc.save();

    console.log("register user", result);
};

const loginUser = async (username, password, req) => { // Pass 'req' to access session
    try {
      const user = await UserModel.findOne({ username: username });
  
      // Check if user exists
      if (!user) {
        throw new Error("user not found");
      }
  
      // Check if entered password is correct
      if (user.password !== password) {
        throw new Error("password incorrect");
      }
  
      // Store user data in the session
      req.session.user = user;
  
      return user;
    } catch (error) {
      throw error;
    }
  };

    // Gets all users from DB
    const getUsers = async () => {
        const users = await UserModel.find();
    
        console.log("users", users);
    
        return users;
    };

    // Deletes user from DB
    const deleteUser = async (id) => {
        try {
            const user = await UserModel.findOne({ _id: id });
    
            if(!user) {
                throw new Error("user not found");
            }
        
            await UserModel.deleteOne({ _id: id });
        
            return { message: "user successfully deleted" };
        } catch (error) {
            throw new Error("error deleting user: " + error.message);
        }
    };

    // Not in use anymore
    const getUserById = async (userID) => {
        try {
          const user = await UserModel.findOne({ _id: userID });
          return user;
        } catch (error) {
          throw new Error("Error fetching user data: " + error.message);
        }
      };

export  { registerUser, loginUser, getUsers, deleteUser, getUserById };
