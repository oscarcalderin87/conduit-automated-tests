const {Then} = require("@cucumber/cucumber")
const {expect} = require("chai")

Then(/^I check that the articles were created$/, async function () {
    const articles = await this.page.getArticles()
    const expectedTitles = this.articles.map( article => article.title)
    articles.forEach(article => {
        expect(expectedTitles,
            `The article: '${article}' should be present in the expected list of articles`).include(article)
    })
})
