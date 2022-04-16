import {IInsurance} from "./interfaces";

class Insurance implements IInsurance {
    private readonly id : String;
    private readonly type : String;

    constructor(id : String, type : String) {
        this.id = id;
        this.type = type;
    }

    getID = () : String => this.id;
    getType = () : String => this.type;
}

export default Insurance;