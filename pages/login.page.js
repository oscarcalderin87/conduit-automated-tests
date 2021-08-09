const {By} = require("selenium-webdriver")
const BasePage = require("./base.page")

class LoginPage extends BasePage {
    constructor(driver) {
        super(driver)
        this.pageSelector = By.xpath("//h1[text()='Sign in']")
        this.inputEmail = By.name("email")
        this.inputPassword = By.name("password")
        this.signInButton = By.css("[type='submit']")
        this.loggedInSuccessfullyMsg = By.xpath("//div[text()='Logged in successfully']")
    }

    async login(email, password) {
        await this.driver.findElement(this.inputEmail).sendKeys(email)
        await this.driver.findElement(this.inputPassword).sendKeys(password)
        await this.driver.findElement(this.signInButton).click()
    }

    atLoginPage() {
        return this.atPage(this.pageSelector)
    }

    async waitForLoggedIn() {
        await this.waitForInvisibilityOfElement(this.loggedInSuccessfullyMsg)
    }
}

module.exports = LoginPage
