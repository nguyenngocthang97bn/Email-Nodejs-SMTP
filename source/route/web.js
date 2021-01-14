
const express = require('express')
const router = express.Router()
const homeController = require('../controller/homeController')
const emailController = require('../controller/emailController')

let initRoutes = (app) => {
  // Gọi ra trang home
  router.get('/', homeController.getHome)
  
  // Gọi hành động gửi email
  router.post('/send-email', emailController.sendMail)

  return app.use('/', router)
};

module.exports = initRoutes
