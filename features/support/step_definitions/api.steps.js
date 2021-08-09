const {Given} = require("cucumber")
const {expect} = require("chai")
const {generateUserName} = require("../utils/utils")
const User = require("../../../models/User")
const {getData, postData} = require("../utils/restHelper")
const Article = require("../../../models/Article")

Given(/^A new user$/, async function () {
    const username = generateUserName()
    const email = `${username}@gmail.com`
    const password = 'test_P@assw0rd*'

    const body = {
        'username': username,
        'email': email,
        'password': password
    }

    const headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }

    const response = await getData('/users', body, headers)

    expect(response.status).to.be.equal(201,
        `The status code should be 201, but it is ${response.status}`)
    expect(response.data.message).to.be.equal("Registered successfully.",
        `The response message should be 'Registered successfully.', but it is '${response.data.message}'`)
    expect(response.data.data).to.have.property('token').that.is.a('string',
        'the response should contains a token')

    this.user = new User(username, email, password, response.data.data.token)
})

Given(/^I want to create some articles$/, async function (table) {
    const data = table.hashes()
    let articles = []
    for (let i = 0; i < data.length; i++) {
        const row = data[i]
        const title = row.title
        const description = row.description
        const body = row.body
        const tags = row.tags.split(',')

        const requestBody = {
            'title': title,
            'description': description,
            'body': body,
            'tagList': tags
        }

        const headers = {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'authorization': `Bearer ${this.user.token}`
        }

        const response = await postData('/articles', requestBody, headers)

        expect(response.status).to.be.equal(201,
            `The status code should be 201, but it is ${response.status}`)
        expect(response.data.message).to.be.equal("Created successfully",
            `The response message should be 'Created successfully', but it is '${response.data.message}'`)
        expect(response.data.data.title).to.be.equal(title,
            `The title is '${response.data.data.title}', but it should be '${title}'`)
        expect(response.data.data.description).to.be.equal(description,
            `The description is '${response.data.data.description}', but it should be '${description}'`)
        expect(response.data.data.body).to.be.equal(body,
            `The body is '${response.data.data.body}', but it should be '${body}'`)
        for (let tag of tags) {
            expect(response.data.data.tagList).to.include(tag,
                `The tag '${tag}' should be present on the tags list, but it is no`)
        }
        articles.push(new Article(title, description, body, tags))
    }

    this.articles = articles
})
