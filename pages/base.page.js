class BasePage {
    constructor(_driver) {
        this.driver = _driver
    }

    atPage(pageSelector) {
        return this.driver.findElement(pageSelector).isDisplayed()
    }

    async waitForInvisibilityOfElement(selector, timeout = 5000) {
        await this.driver.wait( () => {
            return this.driver.findElements(selector).then(function (found) {
                return found.length === 0
            })
        }, timeout, 'The element should disappear')
    }
}

module.exports = BasePage
