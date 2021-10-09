import express from "express";
const router = express.Router();

import {
  deleteEmployee,
  updateEmployee,
  createEmployee,
} from "../controllers/employeeController.js";

import { getEmployee, getEmployees } from "../controllers/employeeReads.js";

// import {
//     createEmployee,
// } from '../controllers/employeeController.js'

router.route("/employee").post(createEmployee).get(getEmployees);
router
  .route("/employee/:id")
  .get(getEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);
//router.route('/check').get(check)

export default router;
