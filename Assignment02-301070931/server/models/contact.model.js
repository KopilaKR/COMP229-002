//contact.model.js Jongho Baek 301070931 24.10.22
import mongoose from 'mongoose'
const ContactSchema = new mongoose.Schema({
 firstname: {
 type: String,
 trim: true,
 required: 'Name is required'
 },

 lastname: {
    type: String,
    trim: true,
    required: 'Name is required'
    },
 email: {
 type: String,
 trim: true,
 unique: 'Email already exists',
 match: [/.+\@.+\..+/, 'Please fill a valid email address'],
 required: 'Email is required'
 },
 
 });
export default mongoose.model('Contact', ContactSchema);
