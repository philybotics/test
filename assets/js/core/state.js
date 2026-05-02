import { CONFIG } from './config.js';

export class State {
    static data = {};

    static init() {
        // Load from localStorage or set defaults
        this.data.theme = localStorage.getItem(CONFIG.STORAGE_KEYS.THEME) || CONFIG.DEFAULT_THEME;
        document.body.classList.add(this.data.theme);
    }

    static save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static load(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    static setTheme(themeClass) {
        document.body.classList.remove(...document.body.classList);
        document.body.classList.add(themeClass);
        localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, themeClass);
        this.data.theme = themeClass;
    }
}
