import { environment } from '@environment';

export class Storage {
    public static async get(key: string): Promise<{ [key: string]: string | number | boolean }> {
        return chrome.storage.sync.get(this.getKey(key));
    }

    public static async set(key: string, value: any): Promise<void> {
        return chrome.storage.sync.set({ [this.getKey(key)]: value });
    }

    public static async remove(key: string): Promise<void> {
        return chrome.storage.sync.remove(this.getKey(key));
    }

    public static async clear(): Promise<void> {
        return chrome.storage.sync.clear();
    }

    public static async getBytesInUse(): Promise<number> {
        return chrome.storage.sync.getBytesInUse();
    }

    private static getKey(key: string): string {
        return `${environment.appStoragePrefix}_${key}`;
    }
}
