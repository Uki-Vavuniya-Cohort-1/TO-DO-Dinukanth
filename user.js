const { default: mongoose } = require("mongoose");
const Mongoose =require("mongoose");
const UserSchema = new Mongoose.Schema({
    UserId: {
        type: String,
        require: true,
        unique: true
    },
    Name: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    creatednote: {
        type: String,
        require: true
    }
});

const Model = Mongoose.model('To-User', UserSchema);
module.exports = Model;