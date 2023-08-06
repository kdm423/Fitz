import mongoose from "mongoose";

const contestSchema = mongoose.Schema({
    contestName: String,
    startDate: Date,
    contestActivity: String,
    entryIDList: []
});

const ContestModel = mongoose.model("Contests", contestSchema);

export { ContestModel };