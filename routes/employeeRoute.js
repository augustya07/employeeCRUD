import express from 'express'
const router = express.Router()

import {
    deleteEmployee,
    updateEmployee,
    getEmployee,
    createEmployee,
    getEmployees, check
} from '../controllers/employeeController.js'
// import {
//     createEmployee,
// } from '../controllers/employeeController.js'


router.route('/employee').post(createEmployee).get(getEmployees)
router.route('/employee/:id').get(getEmployee).put(updateEmployee).delete(deleteEmployee)
//router.route('/check').get(check)

export default router
