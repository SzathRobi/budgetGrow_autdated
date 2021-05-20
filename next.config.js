const withPWA = require('next-pwa')
 
module.exports = withPWA({
    env: {
        mongodburl: "mongodb+srv://Vatu:ErjEqI1HwNDuBwiZ@budgetgrow.ngwsh.mongodb.net/budgetGrow?retryWrites=true&w=majority",
    },
    pwa: {
        dest: 'public'
    }
})