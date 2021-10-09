import mongoose from 'mongoose'

const employeeSchema =  new mongoose.Schema(
    {
        name: {
            type: String,
            required: 'Name is required',
            minLength: [2, 'name is too short'],
            maxLength: [32, 'name is too long']
        },
        salary: { 
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: 'address is required',
            minLength: [2, 'address is too short'],
            maxLength: [32, 'address is too long']
        },
        team: {
            type: String,
            required: 'team is required',
        },
        gender: {
            type: String,
            required: true,
            enum: ['Male', 'Female', 'other']
        }
    }
)

const  Employee = mongoose.model('Employee',employeeSchema)

export default Employee