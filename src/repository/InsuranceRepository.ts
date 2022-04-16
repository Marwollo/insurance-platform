import {IInsuranceRepository} from "./interfaces/IInsuranceRepository";
import {IInsurance} from "../models/interfaces";
import Insurance from "../models/Insurance";

class InsuranceRepository implements IInsuranceRepository<IInsurance> {
    getByID(id: String): IInsurance {
        return new Insurance("", "");
    }

    getByStartDate(type: Date): IInsurance {
        return new Insurance("", "");
    }

    getByType(type: String): IInsurance {
        return new Insurance("", "");
    }
}

export default Insurance;