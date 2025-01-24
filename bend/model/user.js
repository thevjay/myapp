const { default: mongoose } = require("mongoose");

const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
       }, 
       email: {
        type: String,
        required: true
       },
       password: {
        type: String,
        required: true
       },
        createdAt: {
        type: Date,
        default: Date.now
    },
});

// Hashing passwords before saving
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});

// Adding a method to verify the password
userSchema.methods.isValidPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User",userSchema);

module.exports = User;