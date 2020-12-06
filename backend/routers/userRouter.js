import express from 'express'
import data from '../data.js'
import User from '../Models/userModels.js'
import expressAsyncHandler from 'express-async-handler'

const userRouter = express.Router()

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    //await User.remove({})
    const createdUsers = await User.insertMany(data.users)
    res.send({ createdUsers })
}))

export default userRouter