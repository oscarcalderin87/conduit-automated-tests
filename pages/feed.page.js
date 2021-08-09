const BasePage = require("./base.page")
const {By} = require("selenium-webdriver")

class FeedPage extends BasePage {
    constructor(driver) {
        super(driver)
        this.homeLink = By.linkText("Home")
        this.pageSelector = username => By.css(`[href='#/@${username}']`)
    }

    atFeedPage() {
        return this.atPage(this.homeLink)
    }

    async goToProfile(username) {
        await this.waitForElement(this.pageSelector(username))
        this.clickWhenClickable(this.pageSelector(username))
    }
}

module.exports = FeedPage
