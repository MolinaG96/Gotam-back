import User from '../models/user'
import type IUserSignup from '../interfaces/usersignup.interface'
import type IToken from '../interfaces/token.interface'
import { generateToken } from '../config/token'

const userServices = {
    createUser: async (user: IUserSignup) => {
        try {
            const newUser = new User(user)
            await newUser.save()
            return newUser
        } catch (error) {
            console.error('createUser service error', error)
            throw error
        }
    },
    findUser: async (email: string) => {
        try {
            const user = await User.find({ email })
            return user
        } catch (error) {
            console.error('findUser service error', error)
            throw error
        }
    },
    newToken: async (data: IToken) => {
        try {
            const token = generateToken(data)
            return token
        } catch (error) {
            console.error('newToken service error', error)
            throw error
        }
    },
}

export default userServices
