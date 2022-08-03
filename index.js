const express = require('express')

const app = express()


app.get('/', function (req, res) {
    res.json({
        message: "you are welcome to my endpoint!"
    })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log('server connected on port:', PORT))