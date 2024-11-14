import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import config from '../../config/config.js';

const signup = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const user = await User.findOne({ email: req.body.email }).session(session);
    if (user) {
      await session.abortTransaction();
      session.endSession();
      return res.status('400').json({ error: 'Email is already taken' });
    }

    const newUser = new User(req.body);
    await newUser.save({ session });

    await session.commitTransaction();
    session.endSession();

    return res.status('200').json({ message: 'Signup successful! Please login.' });
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    return res.status('500').json({ error: 'Could not signup user' });
  }
};

const signin = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status('401').json({ error: 'User not found' });

    if (!user.authenticate(req.body.password)) {
      return res.status('401').json({ error: 'Email and password don\'t match' });
    }

    const token = jwt.sign({ _id: user._id }, config.jwtSecret, { expiresIn: '1h' });
    res.cookie('t', token, { httpOnly: true });

    return res.json({
      token,
      user: { _id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    return res.status('401').json({ error: 'Could not sign in' });
  }
};

const signout = (req, res) => {
  res.clearCookie('t');
  return res.status('200').json({ message: 'Signed out' });
};

const requireSignin = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) return res.status('401').json({ error: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.auth = decoded;
    next();
  } catch (err) {
    return res.status('400').json({ error: 'Invalid token' });
  }
};

const deleteAccount = async (req, res) => { 
  try { 
    const userId = req.auth._id; 
    await User.findByIdAndDelete(userId); 
    res.clearCookie('t'); 
    return res.status('200').json({ message: 'Account deleted successfully' }); 
  } catch (err) { 
    return res.status('500').json({ error: 'Could not delete account' }); } 
  };
export default {
  signup,
  signin,
  signout,
  requireSignin,
  deleteAccount
};
