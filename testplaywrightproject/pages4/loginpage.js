class LoginPage{

    constructor(page){
        this.page = page;
        this.username = page.locator("//input[@id='username']")
        this.password = page.locator("//input[@placeholder='Password']")
        this.loginbutton = page.locator("//div[normalize-space()='Login']")
    }

    async setUserName(username){
        await this.username.fill(username)
    }

    async setPassword(password){
        await this.password.fill(password)
    }

    async clickLoginButton(){
        await this.loginbutton.click()
    }
}

module.exports={LoginPage}