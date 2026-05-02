document.addEventListener('DOMContentLoaded', () => {
    State.init();
    Router.init();
    setupSidebars();
    setupAdmin();
});

function setupSidebars() {
    const leftBtn = $('#menu-left');
    const rightBtn = $('#menu-right');
    const leftSidebar = $('#left-sidebar');
    const rightSidebar = $('#right-sidebar');

    leftBtn.addEventListener('click', () => {
        leftSidebar.classList.toggle('open');
        rightSidebar.classList.remove('open');
    });

    rightBtn.addEventListener('click', () => {
        rightSidebar.classList.toggle('open');
        leftSidebar.classList.remove('open');
    });
}

function setupAdmin() {
    const adminBtn = $('#admin-btn');
    const modal = $('#admin-modal');
    const loginBtn = $('#login-btn');
    const cancelBtn = $('#cancel-btn');
    const passwordInput = $('#admin-password');

    adminBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        passwordInput.focus();
    });

    cancelBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        passwordInput.value = '';
    });

    loginBtn.addEventListener('click', () => {
        if (Auth.login(passwordInput.value)) {
            alert("✅ Admin Access Granted!");
            modal.classList.add('hidden');
            passwordInput.value = '';
        } else {
            alert("❌ Incorrect Password");
        }
    });
}
