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


// addContact("Jim", 1233211234, "Scranton, PA");
// addContact("Jordan", 1233211234, "Under a bridge");
// addContact("Jennifer", 75937271939, "NCC-1701 Enterprise-D, with Data");
// addContact("William", 9844191232, "Texas");

Database.saveDatabase(Database.contactDatabase, "contacts");

module.exports = {addContact}