class LoginPage
{
    constructor(page){
        this.page = page;
        this.userName = page.locator("//input[@id='username']")
        this.password = page.locator("//input[@placeholder='Password']")
        this.loginButton = page.locator("//div[normalize-space()='Login']")
    }

    async setUserName(username){
        await this.userName.fill(username)
    }

    async setPassword(password){
        await this.password.fill(password)
    }

    async clickLoginButton(){
        await this.loginButton.click()
    }
}

module.exports = {LoginPage}