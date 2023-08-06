// IMPORTS
import express from "express";
import { v4 } from uuid;
import { createContest, getContests, getContests, deleteContest } from "../services/ContestService";

const app = express();

app.use(express.json());

////////////////////////////////
//    CRUD Ops for Contests   //
////////////////////////////////

/*
 /createContest
o   Creation of contests which will feature a unique 
    ID 
o   name, start date, contestActivity
o   Request body - {“uniqueContestID”: “id”, “contestName”: “contest name”, “startDate”: date, “endDate”: date, “description”: “contest description”, “entries”: []}
o   Response: status – 201, message: “Contest successfully created”
*/
app.post('/createContest/', function(request,response){
    let {contestName} = request.body.contestName;
    let {startDate} = request.body.startDate;
    let {contestActivity} = request.body.contestActivity;

    let uniqueID = v4();

    let payload = createContest( uniqueID, contestName, startDate, contestActivity, [] );

    response
        .status(201)
        .send({message: "New contest created"})


})


/* R - Retrieve
/getContestInfo
o   Retrieves contest information
o   query - name, description, start date, end date
o   GET
o   Response: status – 200, data
*/
function getAllContestsEndpoint(request, response){
    response
        .status(200)
        .send(getContests());
}

app.get("/getAllContests", getAllContestsEndpoint);


/* U - Update
/updateContestInfo
o   recieves changes from the request body and updates 
    the desired contest
o   name
o   PUT
o   Response: status - 200, message: "Contest successfully updated"
*/
app.put("/updateContest/:id/:contestActivity", function(request,response){
    let {id} = request.query;

    let {contestActivity} = request.body; 

    let data = getContests();

    for(let i = 0; i<data.length;i++){

        if(data[i].id === id){
            data[i].status = contestActivity;
            break;
        }
    }

    response
        .status(200) 
        .send({message:"Contest activity updated"})
})


/* D - Delete
o   Removes a contest from the DB
o   name
o   DELETE
o   Response: status - 200, message: "Contest successfully"
*/
app.delete("/deleteContest/:id", function(request, response){
    let {id} = request.body;

    deleteContest(id);

    response
        .status(200) 
        .send({message:"Contest activity deleted"})
});


let PORT = 1234;

app.listen(PORT, function () {
    console.log("Listening to port ", PORT);
});

