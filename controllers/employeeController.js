import asyncHandler from 'express-async-handler'
import Employee from "../models/employeeModel.js";


const check = asyncHandler(async  (req,res ) => {
    res.send('Working ')
})

const createEmployee = asyncHandler(async (req, res) => {
    const {
        name,
        salary,
        address,
        team,
        gender
    } = req.body;

    const employee =   new Employee ({
        name,
        salary,
        address,
        team,
        gender
    })

    const createdEmployee = await employee.save()

   // res.json(employee)
   console.log(createdEmployee)
    
        res.status(201).json({
            _id: employee._id,
            name: employee.name,
            salary: employee.salary,
            address: employee.address,
            team: employee.team,
            gender: employee.gender
        })
    // else {
    //     res.status(400)
    //     throw new Error('Invalid employee data')
    // }
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
        res.status(201).json({
            // message: 'Employee updated ',
            updatedEmployee,
            message: "Employee updated"

        }

        )
    } else {
        res.status(404)
        throw new Error('Employee not found')
    }
})


export  {createEmployee,updateEmployee,deleteEmployee,check}
