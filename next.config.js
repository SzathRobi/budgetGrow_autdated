const withPWA = require('next-pwa')
 
module.exports = withPWA({
    env: {
        mongodburl: "mongodb+srv://Vatu:Figma123@budgetgrow.ngwsh.mongodb.net/budgetGrow?retryWrites=true&w=majority",
    },
    pwa: {
        dest: 'public'
    }
})