// Define the database as an object

const contactDatabase = {};



const loadDatabase = localStorageKey => {

    const databaseString = localStorage.getItem(localStorageKey)

    return JSON.parse(databaseString)
}


const saveDatabase = function (databaseObject, localStorageKey) {
    /*
    Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
    Create a key in local storage, and store the string
    version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const Database = {
    contactDatabase: {},
    loadDatabase: localStorageKey => {

        const databaseString = localStorage.getItem(localStorageKey)

        return JSON.parse(databaseString)
    },
    saveDatabase: function (databaseObject, localStorageKey) {
        /*
        Convert the Object into a string.
        */
        const stringifiedDatabase = JSON.stringify(databaseObject)

        /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
        */
        localStorage.setItem(localStorageKey, stringifiedDatabase)
    }
}
module.exports = Database
