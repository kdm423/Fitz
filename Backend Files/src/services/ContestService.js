import { ContestModel } from "..models/ContestModel.js";

// creates a new contest & adds it to the DB
const createContest = async( contestID, contestName, startDate,
                                     contestActivity, entryIDList ) => {
  try{
    let newContest = new ContestModel({
        contestID: contestID,
        contestName: contestName,
        startDate: startDate,
        contestActivity: contestActivity,
        entryIDList: entryIDList,
    })

    const result = await postContest.save();

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

    // Gets post created by a specific user from DB
    const getEntries = async (contestID) => {
        const data = await ContestModel.find(entryIDList);

        //console.log("data", data);

        return data;
    }

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


export { createContest, getContests, getContests, deleteContest};