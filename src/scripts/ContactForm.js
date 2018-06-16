const Database = require("./ContactCollection");
const Contact = require("./Contact");
let data = Database.loadDatabase("contacts")

//function that takes the dataset one wants to look at (or defaults to everything) and creates sections for them and prints to the DOM
let makeData = (data) => {
    document.querySelector("#myStuff").innerHTML = ""; //clears the current contents of the DOM

    console.log(data)
    const fragment = document.createElement("div"); //create a document fragment so there is only one write event to the DOM
    fragment.textContent = "Contact List"

    //function for making a paragraph element
    const mkPara = () => {
        return document.createElement("p");
    }
    //function for making a section element
    const mkSec = () => {
        return document.createElement("section")
    }

    //function that makes a section with paragraphs where the content is equal to the current iteration in the database
    const runSectionMaker = (data) => {
        // console.log(data)
        for (key in data) {
            let para1 = mkPara();
            let para2 = mkPara();
            let para3 = mkPara();
            let para4 = mkPara();
            let sec = mkSec();

            para1.textContent = `Name: ${data[key].name}`
            para2.textContent = `Phone: ${data[key].phoneNumber}`;
            para3.textContent = `Address: ${data[key].address}`;
            para4.textContent = `Contact Number: ${data[key].contactNum}`
            sec.appendChild(para1);
            sec.appendChild(para2);
            sec.appendChild(para3);
            sec.appendChild(para4);
            fragment.appendChild(sec)
        } document.querySelector("#myStuff").appendChild(fragment)
    }
    runSectionMaker(data);

}



//default on page load is to print everything
makeData(data);

document.querySelector("#addItem").addEventListener("click", function () {
    let nameItem = document.querySelector("#contactName").value;
    console.log(nameItem);
    let addressItem = document.querySelector("#contactAddress").value;
    let phoneItem = document.querySelector("#contactPhone").value;


    addContact(nameItem, addressItem, phoneItem);

    Database.saveDatabase(Database.contactDatabase, "contacts")
    makeData(Database.contactDatabase);
});

module.exports = makeData;