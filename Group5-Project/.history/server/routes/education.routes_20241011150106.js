import express from 'express'
    import qualificationCtrl from '../controllers/qualification.controller.js' 
    const router = express.Router()
    router.route('/api/qualifications').post(qualificationCtrl.create)
    router.route('/api/qualifications').get(qualificationCtrl.list)
    router.param('qualificationId', qualificationCtrl.qualificationByID)
    router.route('/api/qualifications/:qualificationId').get(qualificationCtrl.read)
    router.route('/api/qualifications/:qualificationId').put(qualificationCtrl.update)
    router.route('/api/qualifications/:qualificationId').delete(qualificationCtrl.remove)

    export default router


