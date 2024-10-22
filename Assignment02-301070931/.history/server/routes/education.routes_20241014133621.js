import express from 'express'
    import qualificationCtrl from '../controllers/education.controller.js' 
    const router = express.Router()
    router.route('/api/qualifications')._______(qualificationCtrl.create)
    router.route('/api/qualifications').get(qualificationCtrl.list)
    router.param('qualificationId', qualificationCtrl.qualificationByID)
    router.route('/api/qualifications/:qualificationId').get(qualificationCtrl.read)
    router.route('/api/qualifications/:qualificationId').put(qualificationCtrl.update)
    router.route('/api/qualifications/:qualificationId').delete(qualificationCtrl.remove)

    export default router


