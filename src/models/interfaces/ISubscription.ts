import {IUser} from "./IUser";

export interface ISubscription<HolderInstance> {
    getUserInstance(): HolderInstance;
    getStartDate(): Date;
    getEndDate(): Date;
}