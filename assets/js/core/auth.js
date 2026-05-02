import { CONFIG } from './config.js';

export class Auth {
    static isAdminLoggedIn = false;

    static login(password) {
        if (password === CONFIG.ADMIN_PASSWORD) {
            this.isAdminLoggedIn = true;
            return true;
        }
        return false;
    }

    static logout() {
        this.isAdminLoggedIn = false;
    }

    static isLoggedIn() {
        return this.isAdminLoggedIn;
    }
}
