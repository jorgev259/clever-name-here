// Dependencies
const fs = require('fs')
const http = require('http')
const https = require('https')
const express = require('express')
const path = require('path')
const config = require('./config.js')

const app = express()
app.set('view engine', 'ejs')
const options = config.certs

app.get('/:id', (req, res) => {
  res.render('index.ejs', { songName: 'asd', songCover: '123', songId: 'a' })
})

app.get('/player/:id', (req, res) => {
  res.render('player.ejs', { songName: 'asd', songCover: '123', songId: 'a' })
})

app.use(express.static('public'))

// Starting both http & https servers
const httpServer = http.createServer(app)
const httpsServer = https.createServer(options, app)

httpServer.listen(80, () => {
  console.log('HTTP Server running on port 80')
})

httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 443')
})
