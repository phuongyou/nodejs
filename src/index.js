const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs  = require('express-handlebars')
const app = express()
const port = 3000

//HTTP logger
app.use(morgan('combined'))

//Static file
app.use(express.static(path.join(__dirname, 'public')))


//Template engine
app.engine('hbs', exphbs({
  extname:'.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'recourses/views'))


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})



//127.1.1.1 === localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})