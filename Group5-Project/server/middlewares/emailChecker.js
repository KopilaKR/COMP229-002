import User from '../models/user.model.js';

const emailChecker = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status('400').json({ error: 'Email is already taken' });
    }
    next(); // 중복이 없으면 다음 미들웨어로 진행
  } catch (err) {
    return res.status('500').json({ error: 'Could not process request' });
  }
};

export default emailChecker;
