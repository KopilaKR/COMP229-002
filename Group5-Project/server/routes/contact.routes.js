import express from 'express';
import contactCtrl from '../controllers/contact.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/api/contacts')
  .post(contactCtrl.create)
  .get(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.list);

router.param('contactId', contactCtrl.contactByID);
router.route('/api/contacts/:contactId')
  .get(contactCtrl.read)
  .put(contactCtrl.update)
  .delete(contactCtrl.remove);

export default router;
