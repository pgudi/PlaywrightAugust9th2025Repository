// LoginPage.js
const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.profileIcon = page.locator('span.oxd-userdropdown-tab');
    this.logoutButton = page.locator('a:has-text("Logout")');
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async logout() {
    await this.profileIcon.click();
    await this.logoutButton.click();
  }
}

module.exports = { LoginPage };
