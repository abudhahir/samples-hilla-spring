import { EndpointRequestInit as EndpointRequestInit_1 } from "@hilla/frontend";
import type CompanyRecord_1 from "./com/example/application/services/CRMService/CompanyRecord.js";
import type ContactRecord_1 from "./com/example/application/services/CRMService/ContactRecord.js";
import client_1 from "./connect-client.default.js";
async function findAllCompanies_1(init?: EndpointRequestInit_1): Promise<Array<CompanyRecord_1>> { return client_1.call("CRMService", "findAllCompanies", {}, init); }
async function findAllContacts_1(init?: EndpointRequestInit_1): Promise<Array<ContactRecord_1>> { return client_1.call("CRMService", "findAllContacts", {}, init); }
async function save_1(contact: ContactRecord_1, init?: EndpointRequestInit_1): Promise<ContactRecord_1> { return client_1.call("CRMService", "save", { contact }, init); }
export { findAllCompanies_1 as findAllCompanies, findAllContacts_1 as findAllContacts, save_1 as save };
