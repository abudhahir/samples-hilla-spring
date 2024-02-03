import type CompanyRecord_1 from "./CompanyRecord.js";
interface ContactRecord {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    company: CompanyRecord_1;
}
export default ContactRecord;
