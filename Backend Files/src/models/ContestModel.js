import mongoose from "mongoose";

const contestSchema = mongoose.Schema({
    contestID: int,
    contestName: String,
    startDate: Date,
    contestActivity: String,
    entryIDList: Array
});

const ContestModel = mongoose.model("Contests", contestSchema);

export { ContestModel };