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

    public override async getTreeBookmarks(): Promise<any>{
        return window.browser.storage.local.getTree();
    }

    /**
     *
     * TABS
     *
     */

    public override async createTabs(url: string): Promise<any> {
        return window.browser.tabs.create({ url });
    }

    public override async updateTabs(url: string): Promise<any> {
        return window.browser.tabs.update({ url });
    }

    /**
     *
     * STORAGE
     *
     */


    public override async getItemStorage(key: string, defaultValue: any = null): Promise<any>  {
        const itemKey = this.buildKey(key);
        return window.browser.storage.local.get(itemKey)
            .then((data: any) => this.getData(itemKey, data, defaultValue));
    }

    public override async setItemStorage(key: string, value: any): Promise<void> {
        const itemKey = this.buildKey(key);
        return window.browser.storage.local.set({ [itemKey]: value });
    }

    public override async removeItemStorage(key: string): Promise<void> {
        const itemKey = this.buildKey(key);
        return window.browser.storage.local.remove(itemKey);
    }

    public override async clearStorage(): Promise<void> {
        return window.browser.storage.local.clear();
    }

    /**
     *
     * FAVICON
     *
     */

    public override getFaviconUrl(url: string): string {
        try {
            const hostname = new URL(url || '').hostname;
            return `https://api.faviconkit.com/${hostname}/40`;
        } catch (error) {
            console.error(error);
            return '';
        }
    }
}
