import { Injectable } from '@angular/core';
import { BrowserAPIService } from './browser-api.service';

declare var window: any;

@Injectable({
    providedIn: 'root'
})
export class WebExtBrowserAPIService extends BrowserAPIService {

    constructor() {
        super();
    }

    /**
     *
     * BOOKMARKS
     *
     */

    public async getTreeBookmarks(): Promise<any>{
        return window.browser.storage.local.getTree();
    }

    /**
     *
     * TABS
     *
     */

    public async createTabs(url: string): Promise<any> {
        return window.browser.tabs.create({ url });
    }

    public async updateTabs(url: string): Promise<any> {
        return window.browser.tabs.update({ url });
    }

    /**
     *
     * STORAGE
     *
     */


    public async getItemStorage(key: string, defaultValue: any = null): Promise<any>  {
        const itemKey = this.buildKey(key);
        return window.browser.storage.local.get(itemKey)
            .then((data: any) => this.getData(itemKey, data, defaultValue));
    }

    public async setItemStorage(key: string, value: any): Promise<void> {
        const itemKey = this.buildKey(key);
        return window.browser.storage.local.set({ [itemKey]: value });
    }

    public async removeItemStorage(key: string): Promise<void> {
        const itemKey = this.buildKey(key);
        return window.browser.storage.local.remove(itemKey);
    }

    public async clearStorage(): Promise<void> {
        return window.browser.storage.local.clear();
    }

    /**
     *
     * FAVICON
     *
     */

    public getFaviconUrl(url: string): string {
        try {
            const hostname = new URL(url || '').hostname;
            return `https://api.faviconkit.com/${hostname}/40`;
        } catch (error) {
            console.error(error);
            return '';
        }
    }
}
