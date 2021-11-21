declare var require: any;

const pkg = require('../../package.json');

export const environment = {
    appVersion: pkg.version,
    appName: pkg.name,
    appStoragePrefix: pkg.name.replace(/ /g, '_'),
    production: true,
};
