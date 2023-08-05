import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        validate: (value) => {
            return validator.isEmail(value);
        },
        token: String,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model("Users", userSchema);

export { UserModel };