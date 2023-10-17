import type IUser from '../interfaces/user.interface'
import mongoose, { type CallbackError, Schema } from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema: Schema = new Schema({
    name: { type: String, require: true },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function (value: string) {
            const emailRegex =
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            return emailRegex.test(value)
        },
    },
    password: { type: String, required: true },
    salt: String,
})

userSchema.methods.validatePassword = async function (
    password: string
): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt)
    return hash === this.password
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password') || this.isNew) {
        try {
            const salt = bcrypt.genSaltSync(10)
            this.salt = salt

            const hashedPassword = await bcrypt.hash(this.password, this.salt)
            this.password = hashedPassword
            next()
        } catch (error) {
            console.error('Error encripting password:', error)
            next(error as CallbackError)
        }
    }
})

const User = mongoose.model<IUser>('User', userSchema)

export default User
