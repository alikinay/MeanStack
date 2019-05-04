//This code is from https://stackoverflow.com/questions/24621940/how-to-properly-reuseconnection-to-mongodb-across-nodejs-applicationand-module

const mongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017';
let _db;
module.exports = {
    connect: function( callback ) {
        mongoClient.connect( mongoURL,
            { useNewUrlParser: true }, function( err, client
            ) {
                _db = client.db('passport');
                return callback( err );
            } );
    },
    getDB: () => { return _db; }
}