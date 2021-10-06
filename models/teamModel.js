import mongoose from 'mongoose'

const teamSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: 'Name is required',
            minLength: [2, 'name is too short'],
            maxLength: [32, 'name is too long']
        },

    }
)

const Team = mongoose.model('Team', teamSchema)

export default Team