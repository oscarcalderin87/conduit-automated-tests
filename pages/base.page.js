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

    clickWhenClickable(selector, timeout = 15000){
        this.driver.wait(() => {
            this.driver.findElement(selector).then(function(element){
                return element.click().then(function(){
                    return true
                }, function(){
                    return false
                })
            }, function(){
                return false
            })
        }, timeout, 'Timeout waiting for: ' + selector.value)
    }
}

module.exports = BasePage
