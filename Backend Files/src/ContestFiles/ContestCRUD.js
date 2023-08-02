// IMPORTS
import express from "express";


////////////////////////////////
//    CRUD Ops for Contests   //
////////////////////////////////

/*
 /createContest
o   Creation of contests which will feature a unique 
    ID 
o   name, start date, end date, and description will need to be entered
o   POST 
o   Request body - {“uniqueContestID”: “id”, “contestName”: “contest name”, “startDate”: date, “endDate”: date, “description”: “contest description”, “entries”: []}
o   Response: status – 201, message: “Contest successfully created”
*/



/* R - Retrieve
/getContestInfo
o   Retrieves contest information
o   name, description, start date, end date, and posts 
o   GET
o   Response: status – 200, data
*/



/* U - Update
/updateContestInfo
o   recieves changes from the request body and updates 
    the desired contest
o   name
o   PUT
o   Response: status - 200, message: "Contest successfully updated"
*/



/* D - Delete
o   Removes a contest from the DB
o   name
o   DELETE
o   Response: status - 200, message: "Contest successfully"
*/



