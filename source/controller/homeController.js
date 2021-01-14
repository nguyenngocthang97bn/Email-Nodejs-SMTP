
 //homeController.js
 
const path = require('path')

let getHome = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../view/index.html`))
}

module.exports = {
  getHome: getHome
}
