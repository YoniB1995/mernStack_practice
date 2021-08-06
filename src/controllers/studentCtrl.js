const connection = require('../db/index')

const db = connection.db('test');
db.createCollection('newCollect');



module.exports = db;