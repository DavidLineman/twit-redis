const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res ) => res.render('index'))
app.listen(3000, () => console.log('Server ready'))

app.post('/', (req, res) => {
  const { username, password} = req.body

  if ( !usenname || !password ) {
    res.render('error', {
      message: 'Please set both username and password'
    })
    return
  }
  console.log(req.body, username, password)
  res.end()
})