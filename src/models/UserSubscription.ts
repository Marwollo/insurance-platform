import Subscription from "./Subscription";
import {IUser} from "./interfaces";
import User from "./User";

class UserSubscription extends Subscription<IUser> {
    getUserInstance(): IUser {
        return new User(
            "mock-id",
            "John",
            "Doe",
            "Višegradska 33",
            "+0123456789"
        );
    }
}