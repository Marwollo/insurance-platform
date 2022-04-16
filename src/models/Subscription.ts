import {ISubscription, IUser} from "./interfaces";
import User from "./User";

abstract class Subscription<HolderInstance> implements ISubscription<HolderInstance> {
    getEndDate(): Date {
        return new Date();
    }

    getStartDate(): Date {
        return new Date();
    }

    abstract getUserInstance(): HolderInstance;
}

export default Subscription;