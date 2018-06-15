const Database = require("./ContactCollection");
const Contact = require("./Contact");
const loadDatabase = (contactDatabase) => {
    // Get the string version of the database
    const databaseString = localStorage.getItem(Database.contactDatabase)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

//function that takes the dataset one wants to look at (or defaults to everything) and creates sections for them and prints to the DOM
let makeData = (dataSet) => {
    loadDatabase(Database.contactDatabase);
    document.querySelector("#myStuff").innerHTML = ""; //clears the current contents of the DOM

    // //put the database into a variable
    // let run = Database.loadDatabase("contacts");


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

    //function that a section with paragraphs where the content is equal to the current iteration in the database
    const runSectionMaker = (dataSet) => {
        console.log(dataSet)
        for (key in dataSet) {
            let para1 = mkPara();
            let para2 = mkPara();
            let para3 = mkPara();
            let para4 = mkPara();
            let sec = mkSec();

            para1.textContent = `Name: ${dataSet[key].name}`
            para2.textContent = `Phone: ${dataSet[key].phoneNumber}`;
            para3.textContent = `Address: ${dataSet[key].address}`;
            para4.textContent = `Contact Number: ${dataSet[key].contactNum}`
            sec.appendChild(para1);
            sec.appendChild(para2);
            sec.appendChild(para3);
            sec.appendChild(para4);
            fragment.appendChild(sec)
        } document.querySelector("#myStuff").appendChild(fragment)
    }
    runSectionMaker(dataSet);

}

// makeData(Database.contactDatabase);



loadDatabase(Database.contactDatabase);

//default on page load is to print everything
makeData(Database.contactDatabase);

document.querySelector("#addItem").addEventListener("click", function () {
    let nameItem = document.querySelector("#contactName").value;
    console.log(nameItem);
    let addressItem = document.querySelector("#contactAddress").value;
    let phoneItem = document.querySelector("#contactPhone").value;


    addContact(nameItem, addressItem, phoneItem);

    Database.saveDatabase(Database.contactDatabase, "contacts")
    makeData(Database.contactDatabase);
});