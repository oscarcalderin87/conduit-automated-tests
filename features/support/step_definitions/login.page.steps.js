const {When, Then} = require("@cucumber/cucumber")
const LoginPage = require("../../../pages/login.page")
const {expect} = require("chai")
const FeedPage = require("../../../pages/feed.page")
const {baseURL} = require("../../../config")

When(/^I go to the login page$/, async function () {
    await this.driver.get(`${baseURL}/login`)
    this.page = new LoginPage(this.driver)
})

When(/^I check that I am on the Login Page$/, async function () {
    const atPage = await this.page.atLoginPage()
    expect(atPage, 'I should be on the Login Page').to.be.true
})

Then(/^I log in into the application using the registered user$/, async function () {
    await this.page.login(this.user.email, this.user.password)
    this.page = new FeedPage(this.driver)
})
