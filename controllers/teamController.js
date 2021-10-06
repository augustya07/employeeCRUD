import asyncHandler from 'express-async-handler'
import Team from "../models/teamModel.js";


const addTeam = asyncHandler(async (req,res) => {

    const {name} = req.body;
    const team = new Team({name}).save()
    res.status(201).json({
        success: true,
        data: team
    })
})

