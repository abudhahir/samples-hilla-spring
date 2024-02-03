import { _getPropertyModel as _getPropertyModel_1, Email as Email_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NotNull as NotNull_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, Size as Size_1, StringModel as StringModel_1 } from "@hilla/form";
import CompanyRecordModel_1 from "./CompanyRecordModel.js";
import type ContactRecord_1 from "./ContactRecord.js";
class ContactRecordModel<T extends ContactRecord_1 = ContactRecord_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(ContactRecordModel);
    get id(): NumberModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "java.lang.Long" } }));
    }
    get firstName(): StringModel_1 {
        return this[_getPropertyModel_1]("firstName", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1(), new Size_1({ min: 1, max: 50 })], meta: { javaType: "java.lang.String" } }));
    }
    get lastName(): StringModel_1 {
        return this[_getPropertyModel_1]("lastName", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1(), new Size_1({ min: 1, max: 50 })], meta: { javaType: "java.lang.String" } }));
    }
    get email(): StringModel_1 {
        return this[_getPropertyModel_1]("email", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1(), new Email_1()], meta: { javaType: "java.lang.String" } }));
    }
    get company(): CompanyRecordModel_1 {
        return this[_getPropertyModel_1]("company", (parent, key) => new CompanyRecordModel_1(parent, key, false));
    }
}
export default ContactRecordModel;
