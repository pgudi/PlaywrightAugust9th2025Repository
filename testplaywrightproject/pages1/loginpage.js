class LoginPage
{
    constructor(page){
        this.page = page
        this.userName = "//input[@placeholder='Username']"
        this.password = "//input[@placeholder='Password']"
        this.loginButton = "//button[normalize-space()='Login']"
    }

    async loginToApplication(){
        await this.page.fill(this.userName, "Admin")
        await this.page.fill(this.password, "admin123")
        await this.page.click(this.loginButton)
    }
}

module.exports = {LoginPage}