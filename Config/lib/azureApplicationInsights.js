const appInsights = require('applicationinsights');

class APPINSIGHTS {
    static init(paramaters = {
        /** @type {string} */
        APPINSIGHTS_INSTRUMENTATIONKEY: '6e9e22a4-b595-4e06-bab3-235523819afc',
        /** @type {string} */
        APPINSIGHTS_CONNECTIONSTRING: 'InstrumentationKey=6e9e22a4-b595-4e06-bab3-235523819afc;IngestionEndpoint=https://westus2-2.in.applicationinsights.azure.com/',

    }) {
        try {
            const defaultValues = {
            };
            Object.assign(paramaters, defaultValues);
            appInsights.setup(paramaters.APPINSIGHTS_CONNECTIONSTRING)
                .setAutoDependencyCorrelation(true)
                .setAutoCollectRequests(true)
                .setAutoCollectPerformance(true, true)
                .setAutoCollectExceptions(true)
                .setAutoCollectDependencies(true)
                .setAutoCollectConsole(true, true)
                .setUseDiskRetryCaching(true)
                .setSendLiveMetrics(false)
                .setDistributedTracingMode(appInsights.DistributedTracingModes.AI);
            appInsights.defaultClient.context.tags[appInsights.defaultClient.context.keys.cloudRole] = "bands-service";
            appInsights.start();
        } catch (e) {
            console.error(e.message);
        } finally {
            console.log('Azure Application insights Configuration Done!');
        }
    }
}

module.exports = APPINSIGHTS;
