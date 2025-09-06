class LoginPage
{
    constructor(page){
        this.page = page
        this.userName = "//input[@placeholder='Username']"
        this.password = "//input[@placeholder='Password']"
        this.loginButton = "//button[normalize-space()='Login']"
    }

    async setUserName(username){
        await this.page.fill(this.userName, username)
    }

    async setPassword(password){
        await this.page.fill(this.password, password)
    }

    async clickLoginButton(){
        await this.page.click(this.loginButton)
    }
}

module.exports = {LoginPage}