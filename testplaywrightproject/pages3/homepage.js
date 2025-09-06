class HomePage
{
    constructor(page){
        this.page = page
        this.userProfile = page.locator("//img[@class='oxd-userdropdown-img']")
        this.logoutLink = page.locator("//a[normalize-space()='Logout']")
    }

    async clickUserProfile(){
        await this.userProfile.click()
    }

    async clickLogoutLink(){
        await this.logoutLink.click()
    }
}

module.exports = {HomePage}