export interface IInsuranceRepository<InsuranceInstance> {
    getByID(id: String) : InsuranceInstance;
    getByType(type: String) : InsuranceInstance;
    getByStartDate(type: Date): InsuranceInstance;
}