/*
 * @Author: your name
 * @Date: 2021-03-04 15:32:00
 * @LastEditTime: 2021-03-04 16:13:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aws-nodejs-eb-codebuild/app.js
 */
// Load the AWS SDK
var AWS = require('aws-sdk')

var express = require('express')
var bodyParser = require('body-parser')

// Set region for AWS SDKs
AWS.config.region = process.env.REGION

var app = express()

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', function (req, res) {
  res.render('index', {
    title: 'AWS CI/CD Integration'
    })
    res.status(200).end();
})

var port = process.env.PORT || 8080

var server = app.listen(port, function () {
  console.log('Server running at http://127.0.0.1:' + port + '/')
})
