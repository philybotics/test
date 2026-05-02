const Router = {
    currentTab: 'shop',

    init() {
        this.setupTabListeners();
        this.switchTo('shop');
    },

    setupTabListeners() {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab;
                this.switchTo(tab);
            });
        });
    },

    switchTo(tab) {
        this.currentTab = tab;
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });

        this.loadTabContent(tab);
    },

    loadTabContent(tab) {
        const main = document.getElementById('main-content');
        main.innerHTML = `<h1 style="text-align:center; padding: 4rem; color: var(--primary);">
            ${tab.toUpperCase()} Section - Coming Soon
        </h1>`;
    }
};
