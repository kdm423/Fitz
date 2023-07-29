// IMPORTS
import express from "express";

// Contest Index Page

// constructor
const contestApp = express();

// support JSON format of request/response
contestApp.use(express.json());

///////////////////////////////////
//           ENDPOINTS           //
///////////////////////////////////

/*
 /enterContest
o   The users will be able to enter a contest where the API will simply 
    add the post ID to the contest entries list.
o   postID
o   POST
o   Request: body – {uniqueContestID, entries, uniquePostID}
o   Response: status – 200, message: “Contest successfully entered”
*/

// function enterContest

//contestApp.post('/enterContest', enterContest);

/*
 /removeEntry
o   Removal of an post entry from a contest will involve 
    updating the entries list of that contest to not include a 
    particular post
o   postID
o   POST
o   Request: body – {uniqueContestID, entries, uniquePostID}
*/
