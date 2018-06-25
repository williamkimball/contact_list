const Database = require("./ContactCollection")

function contactNo() {
    let randNum = Math.floor(100000000 + Math.random() * 900000000);
    return randNum;
}

addContact = function (name, phone, address) {
    let Contact = {
        name: "",
        phoneNumber: "",
        address: "",
        contactNum: ""
    }

    Contact.name = name;
    Contact.phoneNumber = phone;
    Contact.address = address;
    Contact.contactNum = contactNo();
    let data = Database.loadDatabase("contacts");
    data[Contact.contactNum] = Contact;
    Database.saveDatabase(data, "contacts");
}

module.exports = {addContact}