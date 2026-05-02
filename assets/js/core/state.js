const State = {
    data: {},

    init() {
        this.data.theme = localStorage.getItem(CONFIG.STORAGE_KEYS.THEME) || CONFIG.DEFAULT_THEME;
        document.body.classList.add(this.data.theme);
    },

    setTheme(themeClass) {
        document.body.classList.remove(...document.body.classList);
        document.body.classList.add(themeClass);
        localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, themeClass);
        this.data.theme = themeClass;
    }
};
