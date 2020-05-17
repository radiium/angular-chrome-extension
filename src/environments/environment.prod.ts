import { PlatformType } from '@models';

declare var require: any;

export const environment = {
    appName: require('../../package.json').name,
    production: true,
    platform: PlatformType.WEB
};
