require("dotenv").config();
const mongoose = require("mongoose");
const Priority = require("./models/priority.model");

const uri = process.env.DB_URI;



mongoose.connect(uri)
    .then(async () => {
        console.log("db connected");
        // const p1 =new Priority({ Name : "Low", Icon: "Low.png", Color: "#0000ff" });
        // const created =await Priority.create(p1);
        //find by id
        // const found =await Priority.findById("69eddc3054b5b914b51a61be");
        // if (found) {
        //     console.log(found)
        // }
        // else {
        //     console.log("Not found");
        // }

        //findOne and findById returns single object
        //find returns array of objects
        //const result =await Priority.find( { Name : "Normal" });

        // const updated =await Priority.findByIdAndUpdate(
        //     "69eddc3054b5b914b51a61be",//to find document to update
        //     { Name : "Updated1", Icon: "Updated1.png", Color: "#000000" },
        //     {
        //         upsert : false,
        //         new: true
        //     }
        // );
        // if(updated) console.log("document updated");

        const deleted =await Priority.findByIdAndDelete("69eddc3054b5b914b51a61be");
        if(deleted) console.log("document deleted");

        //Priority.findByIdAndDelete()
        const result =await Priority.find();
        //console.log(result);
        result.forEach(r => console.log(r));
    })
    .catch(e => {
        console.log(e.message);
    });