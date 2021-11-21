declare var require: any;

const pkg = require('../../package.json');

export const environment = {
    appVersion: pkg.version,
    appName: pkg.name,
    appStoragePrefix: `dev_${pkg.name.replace(/ /g, '_')}`,
    production: false,
};
