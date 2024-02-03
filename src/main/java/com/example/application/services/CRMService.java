package com.example.application.services;


import com.example.application.data.CompanyRepository;
import com.example.application.data.ContactRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import com.example.application.data.Contact;
import com.example.application.data.Company;

import java.util.List;

@AnonymousAllowed
@BrowserCallable
public class CRMService {
    private final CompanyRepository companyRepository;
    private final ContactRepository contactRepository;

    public CRMService(CompanyRepository companyRepository, ContactRepository contactRepository) {
        this.companyRepository = companyRepository;
        this.contactRepository = contactRepository;
    }

    public record ContactRecord(
            Long id,
            @NotNull
            @Size(min = 1, max = 50)
            String firstName,
            @NotNull
            @Size(min = 1, max = 50)
            String lastName,
            @NotNull
            @Email
            String email,
            @NotNull
            CompanyRecord company
    ) {
    }

    public record CompanyRecord(
            @NotNull
            Long id,
            String name
    ) {
    }


    private ContactRecord toContactRecord(Contact contact) {
        return new ContactRecord(
                contact.getId(),
                contact.getFirstName(),
                contact.getLastName(),
                contact.getEmail(),
                new CompanyRecord(
                        contact.getCompany().getId(),
                        contact.getCompany().getName()
                )
        );
    }

    private CompanyRecord toCompanyRecord(Company company) {
        return new CompanyRecord(
                company.getId(),
                company.getName()
        );
    }

    public List<CompanyRecord> findAllCompanies() {
        return companyRepository.findAll().stream()
                .map(this::toCompanyRecord)
                .toList();
    }

    public List<ContactRecord> findAllContacts() {
        List<Contact> contacts = contactRepository.findAllWithCompany();
        return contacts.stream()
                .map(this::toContactRecord)
                .toList();
    }

    public ContactRecord save(ContactRecord contact) {
        var dbContact  = contactRepository.findById(contact.id).orElseThrow();
        var company = companyRepository.findById(contact.company.id).orElseThrow();

        dbContact.setFirstName(contact.firstName);
        dbContact.setLastName(contact.lastName);
        dbContact.setEmail(contact.email);
        dbContact.setCompany(company);

        var saved = contactRepository.save(dbContact);
        return toContactRecord(saved);
    }
}
