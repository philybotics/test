export class Router {
    static currentTab = 'shop';

    static init() {
        this.setupTabListeners();
        this.switchTo('shop'); // Default tab
    }

    static setupTabListeners() {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab;
                this.switchTo(tab);
            });
        });
    }

    static switchTo(tab) {
        this.currentTab = tab;
        
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });

        // TODO: Load content for each tab
        this.loadTabContent(tab);
    }

    static loadTabContent(tab) {
        const main = document.getElementById('main-content');
        main.innerHTML = `<h1 style="text-align:center; padding: 4rem;">${tab.toUpperCase()} Section - Under Construction</h1>`;
        // We will expand this later for each module
    }
}
