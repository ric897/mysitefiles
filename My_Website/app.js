const express = require('express')
var path = require('path')
const mongoose = require('mongoose')
const Article = require('./models/article')
const methodOverride = require('method-override')
const app = express()
const cors = require('cors')
const port = 6500
const articleRouter = require('./routes/articles')


mongoose.connect('database', { useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex: true})


app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.use(methodOverride('_method'))

app.use(cors())




app.use(express.static(path.join(__dirname,)));

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('index', { articles : articles})
})

app.get('/blog', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('blog', { articles : articles})
})

app.get('/blogdev', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('blogdev', { articles : articles})
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/assets/subPages/about.html')
})

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/assets/subPages/projects.html')
})

app.get('/incognito', (req, res) => {
    res.sendFile(__dirname + '/assets/projectPages/incognitoProject.html')
})

app.get('/tiktok', (req, res) => {
    res.sendFile(__dirname + '/assets/projectPages/tiktokProject.html')
})
app.get('/fasn', (req, res) => {
    res.sendFile(__dirname + '/assets/projectPages/fasnProject.html')
})
app.get('/this_website', (req, res) => {
    res.sendFile(__dirname + '/assets/projectPages/thiswebsiteProject.html')
})
app.get('/dcp', (req, res) => {
    res.sendFile(__dirname + '/assets/projectPages/dcpProject.html')
})
app.get('/tj_video', (req, res) => {
    res.sendFile(__dirname + '/assets/projectPages/tjvidProject.html')
})
app.get('/BU_Media', (req, res) => {
    res.sendFile(__dirname + '/assets/projectPages/BU_Media.html')
})
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/assets/subPages/contact.html')
})
app.get('/audiovisualizer', (req, res) => {
    res.sendFile(__dirname + '/assets/js/empty-example/av.html')
})



app.use('/articles', articleRouter)

app.listen(port, () => console.info(`Listening on port ${port}`))



