import {IUserRepository} from "./interfaces/IUserRepository";
import {IUser} from "../models/interfaces";
import User from "../models/User";

class UserRepository implements IUserRepository<IUser> {
    getUserByToken(token: String): IUser {
        return new User(
            "mock-id",
            "John",
            "Doe",
            "Višegradska 33",
            "+0123456789"
        );
    }
}

export default UserRepository;