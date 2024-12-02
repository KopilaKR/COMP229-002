import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  typeOfService: {
    type: String,
    required: 'Type of service is required',
  },
  firstname: {
    type: String,
    trim: true,
    required: 'First name is required',
  },
  lastname: {
    type: String,
    trim: true,
    required: 'Last name is required',
  },
  email: {
    type: String,
    trim: true,
    unique: 'Email already exists',
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required',
  },
  comments: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Contact', ContactSchema);
