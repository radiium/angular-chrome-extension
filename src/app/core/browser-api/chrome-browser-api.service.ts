import { Injectable } from '@angular/core';
import { BrowserAPIService } from './browser-api.service';

declare var window: any;

@Injectable({
    providedIn: 'root'
})
export class ChromeBrowserAPIService extends BrowserAPIService {

    constructor() {
        super();
    }

    /**
     *
     * BOOKMARKS
     *
     */

    public override async getTreeBookmarks(): Promise<any>{
        return new Promise((resolve, reject) => {
            window.chrome.storage.local.getTree((data: any) => {
                if (window.chrome.runtime.lastError) {
                    reject(window.chrome.runtime.lastError);
                }
                resolve(data);
            });
        });
    }

    /**
     *
     * TABS
     *
     */

    public override async createTabs(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            window.chrome.tabs.create({ url }, (tabs: any) => {
                if (window.chrome.runtime.lastError) {
                    reject(window.chrome.runtime.lastError);
                }
                resolve(tabs);
            });
        });
    }

    public override async updateTabs(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            window.chrome.tabs.update({ url }, (tabs: any) => {
                if (window.chrome.runtime.lastError) {
                    reject(window.chrome.runtime.lastError);
                }
                resolve(tabs);
            });
        });
    }

    /**
     *
     * STORAGE
     *
     */

    public override async getItemStorage(key: string, defaultValue: any = null): Promise<any>  {
        const itemKey = this.buildKey(key);
        return new Promise((resolve, reject) => {
            window.chrome.storage.local.get(itemKey, (data: any) => {
                if (window.chrome.runtime.lastError) {
                    reject(window.chrome.runtime.lastError);
                }
                resolve(this.getData(itemKey, data, defaultValue));
            });
        });
    }

    public override async setItemStorage(key: string, value: any): Promise<void> {
        const itemKey = this.buildKey(key);
        return new Promise((resolve, reject) => {
            window.chrome.storage.local.set({ [itemKey]: value }, () => {
                if (window.chrome.runtime.lastError) {
                    reject(window.chrome.runtime.lastError);
                }
                resolve();
            });
        });
    }

    public override async removeItemStorage(key: string): Promise<void> {
        const itemKey = this.buildKey(key);
        return new Promise((resolve, reject) => {
            window.chrome.storage.local.remove(itemKey, () => {
                if (window.chrome.runtime.lastError) {
                    reject(window.chrome.runtime.lastError);
                }
                resolve();
            });
        });
    }

    public override async clearStorage(): Promise<void> {
        return new Promise((resolve, reject) => {
            window.chrome.storage.local.clear(() => {
                if (window.chrome.runtime.lastError) {
                    reject(window.chrome.runtime.lastError);
                }
                resolve();
            });
        });
    }

    /**
     *
     * FAVICON
     *
     */

    public override getFaviconUrl(url: string): string {
        return `chrome://favicon/size/16@2x/${url}`;
    }
}
