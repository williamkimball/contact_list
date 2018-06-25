const Database = {
    contactDatabase: {},
    loadDatabase: localStorageKey => {
        const localContactDB = localStorage.getItem(localStorageKey)
        if (localContactDB === null) {
            const contactsDB = {}
            return contactsDB
        }
        else {
            const databaseString = localStorage.getItem(localStorageKey)

            return JSON.parse(databaseString)
        }},
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
