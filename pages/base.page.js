const {until} = require("selenium-webdriver");

class BasePage {
    constructor(_driver) {
        this.driver = _driver
    }

    atPage(pageSelector) {
        return this.driver.findElement(pageSelector).isDisplayed()
    }

    async waitForElement(selector, timeout = 5000) {
        await this.driver.wait(until.elementLocated(selector), timeout)
    }

    async waitForElements(selector, timeout = 5000) {
        await this.driver.wait(until.elementsLocated(selector), timeout)
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
