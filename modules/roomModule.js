const mongo  = require("../connection");

module.exports.getRoom = async (req,res) => {
    try{
        const roomData = await mongo.selectedDb.collection("room").find().toArray();
        res.send(roomData);
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
};

module.exports.createRoom = async (req,res) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("room").insertMany(req.body);
        res.send(insertedResponse);
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
};