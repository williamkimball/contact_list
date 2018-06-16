const Database = require("./ContactCollection")
// console.log(Database)
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
    // let contact = Object.create(Contact);
    Contact.name = name;
    Contact.phoneNumber = phone;
    Contact.address = address;
    Contact.contactNum = contactNo()
    Database.contactDatabase[Contact.contactNum] = Contact;
}

module.exports = {addContact}