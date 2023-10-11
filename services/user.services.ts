import User from '../models/user'
import type IUserSignup from '../interfaces/usersignup.interface'

const userServices = {
    createUser: async (user: IUserSignup) => {
        try {
            const newUser = new User(user)
            await newUser.save()
            return newUser
        } catch (error) {
            return console.error('createUser service error', error)
        }
    },
}

export default userServices
