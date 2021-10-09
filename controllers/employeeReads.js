import asyncHandler from "express-async-handler";
import Employee from "../models/employeeModel.js";

const getEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (employee) {
    res.json({
      _id: employee._id,
      name: employee.name,
      salary: employee.salary,
      address: employee.address,
      team: employee.team,
      gender: employee.gender,
    });
  } else {
    res.status(404);
    throw new Error("Employee not found");
  }
});

const getEmployees = asyncHandler(async (req, res) => {
  const pageSize = 20;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Employee.countDocuments({ ...keyword });
  const employee = await Employee.find({...keyword})
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ employee, page, pages: Math.ceil(count / pageSize) });
});

export { getEmployee, getEmployees };
