export interface IUserRepository<UserInstance> {
    getUserByToken(token: String) : UserInstance;
}