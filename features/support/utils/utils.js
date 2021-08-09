const rug = require('random-username-generator')

function generateUserName() {
    rug.setSeperator('_')
    return rug.generate()
}

module.exports = {
    generateUserName
}
