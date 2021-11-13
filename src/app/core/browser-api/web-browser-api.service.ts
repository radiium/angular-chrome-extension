import { Injectable } from '@angular/core';
import { BrowserAPIService } from './browser-api.service';
import * as bookmarks from './bookmarks-fallback.json';

declare var window: any;

@Injectable({
    providedIn: 'root'
})
export class WebBrowserAPIService extends BrowserAPIService {

    constructor() {
        super();
    }

    /**
     *
     * BOOKMARKS
     *
     */

    public override async getTreeBookmarks(): Promise<any>{
        return Promise.resolve(bookmarks);
    }

    /**
     *
     * TABS
     *
     */

    public override async createTabs(url: string): Promise<any> {
        return Promise.resolve(window.open(url, '_blank'));
    }

    public override async updateTabs(url: string): Promise<any> {
        return Promise.resolve(window.open(url, '_self'));
    }

    /**
     *
     * STORAGE
     *
     */

    public override async getItemStorage(key: string, defaultValue: any = null): Promise<any>  {
        const itemKey = this.buildKey(key);
        return new Promise((resolve, reject) => {
            try {
                const data = window.localStorage.getItem(itemKey);
                const item = !!data
                    ? this.parseData(data, defaultValue)
                    : defaultValue;
                resolve(item);
            } catch (error) {
                reject(error);
            }
        });
    }

    public override async setItemStorage(key: string, value: any): Promise<void> {
        const itemKey = this.buildKey(key);
        return new Promise((resolve, reject) => {
            try {
                window.localStorage.setItem(itemKey, JSON.stringify(value));
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }

    public override async removeItemStorage(key: string): Promise<void> {
        const itemKey = this.buildKey(key);
        return new Promise((resolve, reject) => {
            try {
                window.localStorage.removeItem(itemKey);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
        return ;
    }

    public override async clearStorage(): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                window.localStorage.clear();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
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
