<<<<<<< HEAD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema ({
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose);

=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema ({
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose);

>>>>>>> e7365edfee5f6e1e8b983133e05e7b3a72ae3902
module.exports = mongoose.model("User", userSchema);