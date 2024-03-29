// Singletone Design Pattern

class Database {
    constructor(data) {
        if( Database.exists) {
            return Database.instanse
        }

        Database.instanse = this
        Database.exists = true
        this.data = data
    }

    getData () {
        return this.data
    }
}

const mongo = new Database('MongoDB')
console.log(mongo.getData());

const mysql = new Database('MySql')
console.log(mysql.getData());

// return only MogoDB
