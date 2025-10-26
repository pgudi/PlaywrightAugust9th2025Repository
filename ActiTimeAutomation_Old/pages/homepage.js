class HomePage
{
    constructor(page){
       this.page = page;
       this.flyOutWindow = page.locator("//div[@id='gettingStartedShortcutsPanelId']")
       this.logout = page.locator("//a[@id='logoutLink']")
    }

    async clickOnFlyOutWindow(){
        await this.flyOutWindow.click();
    }

    async clickOnLogoutLink(){
         await this.logout.click();
    }

    async getLogoutLinkText(){
       const val= await this.logout.innerText()
       console.log("Text Content :"+val);
       return val;
    }
}

module.exports = {HomePage}