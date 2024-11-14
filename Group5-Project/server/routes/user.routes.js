import express from 'express';
import userCtrl from '../controllers/user.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/api/users')
  .post(authCtrl.signup) // 기존 userCtrl.create를 authCtrl.signup으로 변경
  .get(userCtrl.list);

router.param('userId', userCtrl.userByID);

router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, userCtrl.update)
  .delete(authCtrl.requireSignin, userCtrl.remove);

export default router;
