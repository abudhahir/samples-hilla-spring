import contactRecord from "Frontend/generated/com/example/application/services/CRMService/ContactRecord";
import React, {useEffect, useState} from "react";
import {Select, SelectItem} from "@hilla/react-components/Select";
import {useForm} from "@hilla/react-form";
import ContactRecordModel from "Frontend/generated/com/example/application/services/CRMService/ContactRecordModel";
import {CRMService} from "Frontend/generated/endpoints";
import {TextField} from "@hilla/react-components/TextField";
import {Button} from "@hilla/react-components/Button";
import {EmailField} from "@hilla/react-components/EmailField";

interface ContactsFormProps {
    contact: contactRecord | null;
    onSubmit: (contact: contactRecord) => Promise<void>;
}

export default function ContactsForm({contact, onSubmit}: ContactsFormProps) {

    const [companies, setCompanies] = useState<SelectItem[]>([]);
    const {field, model, submit, reset, read} = useForm(ContactRecordModel, {onSubmit});

    useEffect(() => {
        read(contact);
    }, [contact]);

    useEffect(() => {
        getCompanies();
    }, []);

    async function getCompanies() {
        const companies = await CRMService.findAllCompanies();
        const companyItems = companies.map(company => {
            return {label: company.name, value: company.id + ""};
        });
        setCompanies(companyItems);
    }

    return (
        <div className="flex flex-col gap-s items-start">
            <TextField label="First name" {...field(model.firstName)} />
            <TextField label="Last name" {...field(model.lastName)} />
            <EmailField label="Email" {...field(model.email)} />
            <Select label="Company" items={companies} {...field(model.company.id)} />
            <div className="flex gap-m">
                <Button onClick={submit} theme="primary">Save</Button>
                <Button onClick={reset}>Reset</Button>
            </div>
        </div>
    );
}