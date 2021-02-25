const mongoose = require('mongoose');
const env = require('../env/variables');
const fs = require('fs');


let pool = null;

/**
 * @module MONGOOSE
 *
 * MONGOOSE module to connect with the Mongodb database.
 *
 * @exports Persistance/adapters/MONGOOSE
 * */

class MONGOOSE {
    /**
     * Init Mongoose Function.
     *
     * @param parameters
     * @param {object} parameters.
     * @property {string} parameters.server - Database machine (env var : DATABASE_SERVER).
     * @property {string} parameters.user - Database user (en var :DATABASE_USER).
     * @property {string} parameters.password - Database password (env var :DATABASE_PASSWORD).
     * @returns {Promise<void>}
     */
    static async init(parameters = {
        server: env.DATABASE_SERVER || '',
        user: '',
        password: '',
    }) {
        try {
            const extendedParameters = Object.assign({}, parameters, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
                poolSize: 10,
            });
            /** Set up default mongoose connection. */
            await mongoose.connect(extendedParameters.server, extendedParameters);
            pool = mongoose.connection;
            pool.on('error', console.error.bind(console, 'MongoDB connection error:'));
        } catch (e) {
            /** Bind connection to error event (to get notification of connection errors). */
            console.error(`database module can't not connect to  ${parameters.server}`);
            throw e;
        }
    }

    /**
     * Close connexion with database.
     *
     * @example
     * DB2.close();
     */
    static async close() {
        try {
            console.debug("Disconnecting mongoose from MongoDB database...");
            await mongoose.disconnect();
            console.debug("Mongoose disconnected from MongoDB database");
        } catch (err) {
            console.error(err, "An error occured while disconneting mongoose from the MongoDB database");
            throw err;
        }
    }

    static async import_data(data) {
        try {
            const promises = [];
            const concerts = JSON.parse(fs.readFileSync(`${__dirname}/data/concerts.json`, 'utf-8'));
            const bands = JSON.parse(fs.readFileSync(`${__dirname}/data/bands.json`, 'utf-8'));
            const venues = JSON.parse(fs.readFileSync(`${__dirname}/data/venues.json`, 'utf-8'));
            promises.push(data.Concerts.insertMany(concerts));
            promises.push(data.Bands.insertMany(bands));
            promises.push(data.Venues.insertMany(venues));
            console.log('Importing data to mongodb database...');
            await Promise.all(promises);
            console.log('Import data to mongodb database : Done!');
        } catch (e) {
            console.error(e.message);
            process.exit();
        }
    }
}

module.exports = MONGOOSE;
