var db = require('../db')

let sql = 'CREATE DATABASE vehicle_rent_project'

db.query(sql,(err,results) =>{
    if (err) throw err;
    console.log('Database insert')
})
