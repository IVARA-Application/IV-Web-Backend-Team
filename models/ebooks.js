const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EbooksSchema = new Schema({
    class: [
        {
            //Class 4th - Class 12th
            name: String,
            subjects: [
                {
                    //Physics, Chemistry, Maths
                    name: String,
                    links: [
                        //As desired
                    ]
                }
            ]
        }
    ]
});


module.exports = mongoose.model("Ebooks", EbooksSchema);