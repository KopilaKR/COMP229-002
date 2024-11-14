import express from 'express';
import authCtrl from '../controllers/auth.controller.js';
import emailChecker from '../middlewares/emailChecker.js';

const router = express.Router();

router.post('/signup', emailChecker, authCtrl.signup);
router.post('/signin', authCtrl.signin);
router.get('/signout', authCtrl.signout);
router.delete('/delete', authCtrl.requireSignin, authCtrl.deleteAccount);

export default router;
