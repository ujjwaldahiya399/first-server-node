const mySql = require('mysql2');


const pool = mySql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'ujjwal@420'
})

module.exports = pool.promise();