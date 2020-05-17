import { environment } from '@environment';

export abstract class BrowserAPIService {

    /**
     *
     * BOOKMARKS
     *
     */

    public abstract async getTreeBookmarks(key: string): Promise<any>;

    /**
     *
     * TABS
     *
     */

    public abstract async createTabs(url: string): Promise<any>;

    public abstract async updateTabs(url: string): Promise<any>;

    /**
     *
     * STORAGE
     *
     */

    public abstract async getItemStorage(key: string): Promise<any>;

    public abstract async setItemStorage(key: string, value: any): Promise<void>;

    public abstract async removeItemStorage(key: string): Promise<void>;

    public abstract async clearStorage(): Promise<void>;

    /**
     *
     * FAVICON
     *
     */

    public abstract getFaviconUrl(url: string): string;

    /**
     *
     * PRIVATE UTILS
     *
     */

    protected buildKey(key: string = 'KEY') {
        const appNameKey = environment.appName.toUpperCase().replace('-', '_');
        return `${appNameKey}_${key.toUpperCase()}`;
    }

    protected getData(key: string, data: any, defaultValue: any = null): any {
        return data.hasOwnProperty(key)
            ? data[key]
            : defaultValue;
    }

    protected parseData(data: string = '', defaultValue: any = {}): any {
        try {
            return JSON.parse(data);
        } catch (e) {
            return defaultValue;
        }
    }
}

