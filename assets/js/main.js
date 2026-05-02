import { State } from './core/state.js';
import { Router } from './core/router.js';
import { Auth } from './core/auth.js';
import { $, \] } from './core/utils.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Core Systems
    State.init();
    Router.init();

    // Sidebar Controls
    setupSidebars();

    // Admin Login
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
            // TODO: Open Admin Dashboard later
        } else {
            alert("❌ Incorrect Password");
        }
    });
}
