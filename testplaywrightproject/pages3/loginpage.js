
class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.userName = page.locator("//input[@placeholder='Username']")
        this.password = page.locator("//input[@placeholder='Password']")
        this.loginButton = page.locator("//button[normalize-space()='Login']")
    }

    async setUserName(username){
        await this.userName.fill(username)
    }

    async setpassword(password){
        await this.password.fill(password)
    }

    async clickLoginbutton(){
        await this.loginButton.click()
    }
}

module.exports = {LoginPage}