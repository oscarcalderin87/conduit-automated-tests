const BasePage = require("./base.page")
const {By} = require("selenium-webdriver")

class ProfilePage extends BasePage {
    constructor(driver) {
        super(driver)
        this.articlesDiv = By.className("article-preview")
        this.articleTitle = By.tagName("h1")
    }

    async getArticles() {
        await this.waitForElements(this.articlesDiv)
        const articles = await this.driver.findElements(this.articlesDiv)
        let titles = []
        for(let i = 0; i < articles.length; i++) {
            const title = await articles[i].findElement(this.articleTitle).getText()
            titles.push(title)
        }
        return titles
    }
}

module.exports = ProfilePage
