const mongo  = require("../connection");

module.exports.getbookedRoom = async (req,res) => {
    try{
        const bookedRoomData = await mongo.selectedDb.collection("bookedRoom").find().toArray();
        res.send(bookedRoomData);
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
};

module.exports.createbookedRoom = async (req,res) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("bookedRoom").insertMany(req.body);
        res.send(insertedResponse);
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
};