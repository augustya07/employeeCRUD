import mongoose from 'mongoose'

const employeeSchema = mongoose.Schema(
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
            street: {type: String, required: true},
            city: {type: String, required: true},
            postCode: {type: String, required: true},
            country: {type: String, required: true}
        },
        team: {
            type: mongoose.Schema.Types.ObjectId,
            required: 'team is required',
            ref: 'Team'
        },
        gender: {
            type: String,
            required: true,
            enum: ['male, female', 'other']
        }
    }
)

const  Employee = mongoose.model('Employee',employeeSchema)

export default Employee