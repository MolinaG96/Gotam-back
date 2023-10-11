export default interface IUser {
    _id: string
    email: string
    password: string
    validatePassword: (password: string) => Promise<boolean>
}
