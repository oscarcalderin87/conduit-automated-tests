const { setWorldConstructor, setDefaultTimeout } = require("cucumber")
const seleniumWebdriver = require('selenium-webdriver')
const {browser, timeout} = require("../../config")


class CustomWorld {
    constructor() {
        this.driver = new seleniumWebdriver
            .Builder()
            .forBrowser(browser)
            .build()
    }
}

setDefaultTimeout(timeout)
setWorldConstructor(CustomWorld)
