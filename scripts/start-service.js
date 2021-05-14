const express = require("express")
const path = require("path")
const app = express()
const port = 3000
const staticPath = path.resolve(__dirname, '../')
app.use(express.static(staticPath))
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})