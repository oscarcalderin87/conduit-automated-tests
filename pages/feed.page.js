const BasePage = require("./base.page")
const {By} = require("selenium-webdriver")

class FeedPage extends BasePage {
    constructor(driver) {
        super(driver)
        this.homeLink = By.linkText("Home")
    }

    atFeedPage() {
        return this.atPage(this.homeLink)
    }
}

module.exports = FeedPage
