const fs = require('fs');
const rfs = require('rotating-file-stream');
const env = require('../../../Config/env/variables');

/**
 * Module Logger pour gérer les fichiers de logs et l'envoi vers APM Elastic.
 *
 * @exports Infrastructure/adapters/management/logs/Logger
 *
 * */
class Logger {
    /**
     * Constructor.
     * Initiation de la connexion avec le serveur APM.
     *
     * @param {string} dirName - Dossier de log.
     * @example
     * const logger = new Logger('/testlog');
     */
    constructor(dirName) {
        this.dirName = dirName;
    }

    /**
     *Creation des fichiers de logs.
     *
     * @param {object} options - LogsFile et LogsFileError c'est les noms des fichiers pour les deux niveaux de logs.
     * @property {string} options.logsFile
     * @property {string} options.logsFileError
     */
    initDir(options = {
        logsFile: __config.LOG_DIRECTORY.LOG_FILE || 'access.log',
        logsFileError: __config.LOG_DIRECTORY.LOG_ERROR_FILE || 'error.log',
    }) {
        if (!fs.existsSync(this.dirName)) fs.mkdirSync(this.dirName);
        this.accessLogStream = rfs.createStream(options.logsFile, {
            size: '10M',
            interval: '1d', // rotate daily
            path: this.dirName,
            compress: true,
            maxSize: '5G',
            maxFiles: 15,
        });
        this.errorLogStream = rfs.createStream(options.logsFileError, {
            size: '10M',
            interval: '1d', // rotate daily
            path: this.dirName,
            compress: true,
            maxSize: '2G',
            maxFiles: 15,
        });
        this.errorAPMLogStream = rfs.createStream('apm-error.log', {
            size: '10M',
            interval: '1d', // rotate daily
            path: this.dirName,
            compress: true,
            maxSize: '10G',
            maxFiles: 30,
        });
        this.errorAppInsightsLogStream = rfs.createStream('app-insights.log', {
            size: '10M',
            interval: '1d', // rotate daily
            path: this.dirName,
            compress: true,
            maxSize: '10G',
            maxFiles: 30,
        });
    }
}

module.exports = Logger;
