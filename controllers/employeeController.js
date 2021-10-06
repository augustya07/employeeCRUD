import asyncHandler from 'express-async-handler'
import Employee from "../models/employeeModel.js";


const createEmployee = asyncHandler(async (req, res) => {
    const {
        name,
        salary,
        address,
        team,
        gender
    } = req.body;

    const employee = await Employee.create({
        name,
        salary,
        address,
        team,
        gender
    })

    if (employee) {
        res.status(201).json({
            _id: employee._id,
            name: employee.name,
            salary: employee.address,
            address: employee.address,
            team: employee.team,
            gender: employee.gender
        })
    } else {
        res.status(400)
        throw new Error('Invalid employee data')
    }
})


const getEmployee = asyncHandler(async (req, res) => {
    const employee = await Employee.findById(req.employee._id)

    if (employee) {
        res.json({
            _id: employee._id,
            name: employee.name,
            salary: employee.address,
            address: employee.address,
            team: employee.team,
            gender: employee.gender
        })
    } else {
        res.status(404)
        throw new Error('Employee not found')
    }
})

const getEmployees = asyncHandler(async (req, res, next) => {

    const employee = await Employee.find({})
    res.json(employee)
})

const deleteEmployee = asyncHandler(async (req, res,) => {
    const employee = await Employee.findById(req.params.id)

    if (employee) {
        await employee.remove()
        res.json({message: 'Employee removed successfully'})
    }
    else  {
        res.status(404)
        throw new Error('Employee not found')
    }
})


const updateEmployee = asyncHandler(async (req, res,) => {
    const {
        name,
        salary,
        address,
        team,
        gender
    } = req.body;


  const employee = await Employee.findById(req.params.id)
    if (employee) {
        employee.name = name;
        employee.salary = salary;
        employee.address = address;
        employee.team = team;
        employee.gender = gender;

        const updatedEmployee = await employee.save()
        res.json({message: 'Employee updated '})
    } else {
        res.status(404)
        throw new Error('Employee not found')
    }
})

