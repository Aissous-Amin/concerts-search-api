const mongoose = require('mongoose');
const env = require('../env/variables');

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
     *
     * @param parameters
     * @property {string} parameters.server - Database machine (env var : DATABASE_SERVER).
     * @property {string} parameters.user - Database user (en var :DATABASE_USER).
     * @property {string} parameters.password - Database password (env var :DATABASE_PASSWORD).
     *
     * @returns {Promise<void>}
     *
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
                poolSize: 10,
                autoIndex: false,
            });
            /** Set up default mongoose connection. */
            await mongoose.connect(env.DATABASE_SERVER, extendedParameters);
            pool =  mongoose.connection;
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
}

module.exports = MONGOOSE;
