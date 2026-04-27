const { Schema, SchemaTypes, model } = require("mongoose");


const prioritySchema = new Schema({
        "Name": {
            type: SchemaTypes.String,
            required: true,
            minLength: 3,
            maxLength: 50
        },
        "Icon": {
            type: SchemaTypes.String,
            required: false,
            minLength: 3,
            maxLength: 50
        },
        "Color" : {
            type : SchemaTypes.String,
            required : false,
            minLength: 7,
            maxLength: 7
        }
});

const Priority=model("Priority",prioritySchema);

module.exports=Priority;