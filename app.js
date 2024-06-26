const { MongoClient } = require('mongodb');
const uri = require('./atlas_uri');


console.log(uri);

const client = new MongoClient(uri);
const dbname = 'bank'


const connectToDatabse = async () => {
    try {
        await client.connect();
        console.log(`Connected to the ${dbname} database`);
    } catch (err) {
        console.error(`Error connecting to the database: ${err}`);
        }
    };


const main = async () => {
    try {
        await connectToDatabse();
    } catch (err) {
        console.error(`Error: ${err}`);
    } finally {
        await client.close();
    }
}

// Run the main function

main();

