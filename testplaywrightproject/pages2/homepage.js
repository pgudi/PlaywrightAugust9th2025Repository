class HomePage
{
    constructor(page){
       this.page = page
       this.userProfile = "//img[@class='oxd-userdropdown-img']"
       this.logout ="//a[normalize-space()='Logout']"
    }

    async clickOnUserProfile(){
        this.page.click(this.userProfile)
    }

    async clickOnLogoutLink(){
          this.page.click(this.logout)
    }
}

module.exports = {HomePage}