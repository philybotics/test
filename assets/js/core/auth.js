const Auth = {
    isAdminLoggedIn: false,

    login(password) {
        if (password === CONFIG.ADMIN_PASSWORD) {
            this.isAdminLoggedIn = true;
            return true;
        }
        return false;
    },

    logout() {
        this.isAdminLoggedIn = false;
    },

    isLoggedIn() {
        return this.isAdminLoggedIn;
    }
};
