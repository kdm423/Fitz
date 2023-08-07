import { ContestModel } from "../models/ContestModel.js"

// creates a new contest & adds it to the DB
const createContest = async( contestName, contestActivity ) => {
  try{
    let newContest = new ContestModel({
        contestName: contestName,
        startDate: Date.now(),
        contestActivity: contestActivity,
        entryIDList: [],
    })

    const result = await newContest.save();

    console.log("contest creation in contest service file: ", result);

    return result;
  } catch (error) {
      console.error("error in saving contest: ", error);
      throw error;
  }
};

// Gets all contests from DB
const getContests = async () => {
    const data = await ContestModel.find();

    console.log("data", data);

    return data;
};

// Hard delete from DB
const deleteContest = async (id) => {
    try {
        const post = await ContestModel.findOne({ _id: id });
    
        if(!post) {
            throw new Error("Contest not found");
        }
        
        await ContestModel.deleteOne({ _id: id });
        
        return { message: "Contest successfully deleted" };
    } catch (error) {
        throw new Error("error deleting Contest: " + error.message);
    }
};

        // Adds post to contest by updating contest
const addPost = async (contestID, postID) => {
    try {
        const contest = await ContestModel.findOne({ _id: contestID });
            
        if(!contest) {
            throw new Error("contest not found");
        }
                
        contest.entryIDList.push({ postID });
    
        const updatedList = await contest.save();
                
        return updatedList;
    } catch (error) {
       throw new Error("error adding post to contest: " + error.message);
    }
};

export { createContest, getContests, deleteContest, addPost};