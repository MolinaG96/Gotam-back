export default interface IUser {
    _id: string
    name: string
    email: string
    password: string
    validatePassword: (password: string) => Promise<boolean>
}
