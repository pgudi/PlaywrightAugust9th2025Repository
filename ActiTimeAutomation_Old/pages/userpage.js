class UserPage{
    constructor(page){
        this.page=page;
        this.usermenu = page.locator("//a[@class='content users']//div[@class='img']")
        this.adduserbutton = page.locator("//div[@class='buttonText']")
        this.firstname = page.locator("#userDataLightBox_firstNameField")
        this.lastname = page.locator("#userDataLightBox_lastNameField")
        this.email = page.locator("#userDataLightBox_emailField")
        this.username = page.locator("#userDataLightBox_usernameField")
        this.password = page.locator("#userDataLightBox_passwordField")
        this.retypepassword = page.locator("#userDataLightBox_passwordCopyField")
        this.createuserbutton = page.locator("//span[normalize-space()='Create User']")
        this.newlycreateduser = page.locator("//span[@class='userNameSpan'][normalize-space()='User1, demo']")
        this.deleteuserbutton = page.locator("#userDataLightBox_deleteBtn")

    }

    async clickOnUserMenu(){
        await  this.usermenu.click()
    }

    async clickOnAddUserButton(){
        await this.adduserbutton.click()
    }

    async setFirstNameInUserPage(firstname){
        await this.firstname.fill(firstname)
    }

    async setLastNameInUserPage(lastname){
        await this.lastname.fill(lastname)
    }

    async setEmailInUserPage(email){
        await this.email.fill(email)
    }

    async setUserNameInUserPage(username){
        await this.username.fill(username)
    }

    async setPasswordInUserPage(password){
        await this.password.fill(password)
    }

    async setReTypePasswordInUserPage(retypepassword){
        await this.retypepassword.fill(retypepassword)
    }

    async clickOnCreateUserButton(){
        await  this.createuserbutton.click()
    }

    async clickOnNewlyCreatedUser(){
        await  this.newlycreateduser.click()
    }

    async clickOnDeleteUserButton(){
        await  this.deleteuserbutton.click()
    }

    async getNewlyCreatedUser(){
        const val= await this.newlycreateduser.innerText()
        console.log("User Text Content :"+val);
        return val;
    }
}

module.exports = {UserPage}