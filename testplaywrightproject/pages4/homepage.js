class HomePage{

    constructor(page){
        this.page = page;
        this.flyoutWindow = page.locator("//div[@id='gettingStartedShortcutsPanelId']")
        this.logoutlink = page.locator("//a[@id='logoutLink']")
    }

    async clickOnFlyoutwindow(){
        await this.flyoutWindow.click()
    }

    async clickOnLogoutLink(){
        await this.logoutlink.click()
    }
}

module.exports={HomePage}