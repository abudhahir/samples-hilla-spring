import React, {useEffect, useState} from "react";
import ContactRecord from "Frontend/generated/com/example/application/services/CRMService/ContactRecord";
import {CRMService} from "Frontend/generated/endpoints";
import {Grid} from "@hilla/react-components/Grid";
import {GridColumn} from "@hilla/react-components/GridColumn";
import ContactForm from "Frontend/views/contacts/ContactsForm";

export default function ContactsView() {

    const [contacts, setContacts] = useState<ContactRecord[]>([]);
    const [selected, setSelected] = useState<ContactRecord | null | undefined>();

    useEffect(() => {
        CRMService.findAllContacts().then(setContacts);

    }, [])

    async function onContactSaved(contact: ContactRecord) {
        const saved = await CRMService.save(contact)
        if (contact.id) {
            setContacts(contacts => contacts.map(current => current.id === saved.id ? saved : current));
        } else {
            setContacts(contacts => [...contacts, saved]);
        }
        setSelected(saved);
    }

    return (
        <>
            <div className="p-m flex gap-m">
                <Grid
                    items={contacts}
                    onActiveItemChanged={e => setSelected(e.detail.value)}
                    selectedItems={selected ? [selected] : []}>
                    <GridColumn path="firstName"/>
                    <GridColumn path="lastName"/>
                    <GridColumn path="email" autoWidth/>
                    <GridColumn path="company.name" header="Company name"/>
                </Grid>
            </div>
            <div className="p-m flex gap-m">
                {selected &&
                    <ContactForm contact={selected} onSubmit={onContactSaved}/>
                }
            </div>
        </>
    );
}
