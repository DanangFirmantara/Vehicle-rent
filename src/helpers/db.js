const mysql = require('mysql')

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'vehicle_rent_project'
})

db.connect(err =>{
    if (err) throw err;
    console.log('Database has been connected...')
})
module.exports = db