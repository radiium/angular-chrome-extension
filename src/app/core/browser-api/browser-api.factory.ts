import { ChromeBrowserAPIService } from './chrome-browser-api.service';
import { WebExtBrowserAPIService } from './web-ext-browser-api.service';
import { WebBrowserAPIService } from './web-browser-api.service';
import { PlatformType } from '@models';
import { environment } from '@environment';

export const BrowserAPIFactory = () => {
    if (environment.platform === PlatformType.CHROME) {
        return new ChromeBrowserAPIService();
    } else if (environment.platform === PlatformType.WEB_EXT) {
        return new WebExtBrowserAPIService();
    } else {
        return new WebBrowserAPIService();
    }
};
