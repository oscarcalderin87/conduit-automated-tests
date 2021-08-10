const {Before, After} = require('@cucumber/cucumber')

Before(async function() {
    await this.driver.manage().window().maximize()
})

After(async function() {
    await this.driver.quit()
})
