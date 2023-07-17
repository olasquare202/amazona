import mongoose from 'mongoose';


const userSchema = new mongoose.Schema(//mongoose.Schema accept 2 parameters
    {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    },
{
    timestamps: true
}
);
//create model based on d schema
const User = mongoose.model('User', userSchema);

export default User;