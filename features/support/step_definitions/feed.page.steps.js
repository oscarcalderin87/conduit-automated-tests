const {Then} = require("cucumber")
const {expect} = require("chai")
const ProfilePage = require("../../../pages/profile.page")

Then(/^I check that I am on the Feed Page of the registered user$/, async function () {
    const atPage = await this.page.atFeedPage()
    expect(atPage, 'I should be on the Feed Page').to.be.true
})

Then(/^I go to the profile of the user$/, async function () {
    await this.page.goToProfile(this.user.username)
    this.page = new ProfilePage(this.driver)
})
