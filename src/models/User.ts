import {IUser} from "./interfaces";

class User implements IUser {
    private readonly id : String;
    private readonly firstName : String;
    private readonly lastName;
    private readonly address : String;
    private readonly phoneNumber : String;

    constructor(id? : String, firstName? : String, lastName? : String, address?: String, phoneNumber?: String) {
        this.id = id || "";
        this.firstName = firstName || "";
        this.lastName = lastName || "";
        this.address = address || "";
        this.phoneNumber = phoneNumber || "";
    }

    getID = () : String => this.id;
    getFirstName = () : String => this.firstName;
    getLastName = () : String => this.lastName;
    getAddress = () : String => this.address;
    getPhoneNumber = () : String => this.phoneNumber;
}

export default User;