const APM_SERVICE = require('elastic-apm-node');

class APM {
    static init(paramaters = {
        // Override the name e servicfrom package.json
        // Allowed characters: a-z, A-Z, 0-9, -, _, and space
        serviceName: 'APM-SERVICE-TEST',
        // Use if APM Server requires a secret token
        secretToken: '',
        // Set the custom APM Server URL (default: http://localhost:8200)
        serverUrl: 'http://localhost:8200',
        // Set the service environment
        environment: 'production',
    }) {
        try {
            const defaultValues = {
                asyncHooks: true,
                instrument: true,
                captureBody: 'all',
                errorOnAborteRequsts: true,
                stackTraceLimit: 'Infinity', // production should be infinity
                apiRequestTime: '20s',
                apiRequestSize: '2mb',
                captureSpanStackTraces: false,
                captureErrorLogStackTraces: true,
            };
            Object.assign(paramaters, defaultValues);
            APM_SERVICE.start(paramaters);
        } catch (e) {
            console.error(e.message);
        } finally {
            console.log('APM Server Done!');
        }
    }
}

module.exports = APM;
