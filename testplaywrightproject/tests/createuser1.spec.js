const {test, expect} = require("@playwright/test")

test("Create User TestScript", async({page})=>{
    await page.goto("http://localhost/login.do")
    await expect(page).toHaveTitle("actiTIME - Login")

    const height = await page.viewportSize().height
    const width = await page.viewportSize().width
    console.log("View Port height :"+height);
    console.log("View Port Width :"+width);

    await page.getByPlaceholder("Username").first().fill("admin")
    await page.getByPlaceholder("Password").first().fill("manager")
    await page.locator("//div[normalize-space()='Login']").click()
    //Home Page Validation
    await expect(page).toHaveURL("http://localhost/user/submit_tt.do")
    await expect(page).toHaveTitle("actiTIME -  Enter Time-Track")
    //Minimize Flyout window
    await page.locator("//div[@id='gettingStartedShortcutsPanelId']").click()
    //Create User
    await page.locator("//a[@class='content users']//div[@class='img']").click()
    await page.locator("//div[@class='buttonText']").click()
    await page.locator("#userDataLightBox_firstNameField").fill("demo")
    await page.locator("#userDataLightBox_lastNameField").fill("User1")
    await page.locator("#userDataLightBox_emailField").fill("demo@gmail.com")
    await page.locator("#userDataLightBox_usernameField").fill("demoUser1")
    await page.locator("#userDataLightBox_passwordField").fill("WelcomeOne")
    await page.locator("#userDataLightBox_passwordCopyField").fill("WelcomeOne")
     await page.waitForTimeout(4000)
    await page.locator("//span[normalize-space()='Create User']").click();
   
    //Delete Newly Created User
    await page.locator("//span[@class='userNameSpan'][normalize-space()='User1, demo']").click()
    await page.waitForTimeout(4000)
    //Handle Alert in Palywright
    page.on("dialog", async(dialog)=>{
        const message = await dialog.message()
        console.log(message)
        await dialog.accept()
    })

    await page.locator("#userDataLightBox_deleteBtn").click()

    await page.locator("//a[@id='logoutLink']").click()
    //Validation in Login Page
    await expect(page).toHaveURL("http://localhost/login.do")
    await expect(page).toHaveTitle("actiTIME - Login")
})