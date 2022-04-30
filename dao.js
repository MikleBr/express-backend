const sqlite3 = require("sqlite3");

class AppDAO {
    constructor(dbFilePath) {
        this.db = new sqlite3.Database(dbFilePath, (err) => {
            if (err) {
                console.log('Could not connect to database', err)
            } else {
                console.log('Connected to database', dbFilePath)
            }
        })
    }

    run(sqlQuery, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(sqlQuery, params, function (err) {
                if (err) {
                    console.log('Error running sql ' + sqlQuery);
                    console.log(err);
                    reject(err);
                } else {
                    resolve({ id: this.lastID });
                }
            })
        })
    }

    get(sqlQuery, params = []) {
        return new Promise((resolve, reject) => {
            this.db.get(sqlQuery, params, (err, result) => {
                if (err) {
                    console.log('Error running sql: ' + sqlQuery)
                    console.log(err)
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    all(sqlQuery, params = []) {
        return new Promise((resolve, reject) => {
            this.db.all(sqlQuery, params, (err, rows) => {
                if (err) {
                    console.log('Error running sql: ' + sqlQuery)
                    console.log(err)
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    }
}

module.exports = AppDAO