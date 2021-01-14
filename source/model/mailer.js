
const nodeMailer = require('nodemailer')

// Khai báo các biến môi trường env.
const adminEmail = 'nguyenngocthang97bn@gmail.com'//tài khoản email
const adminPassword = 'thangpro1' //mật khẩu
const mailHost = 'smtp.gmail.com' //host của google - gmail
const mailPort = 587 //cổng trong giao thức SMTP

const sendMail = (to, subject, htmlContent) => {
  // Khởi tạo transporter object sử dụng chuẩn giao thức truyền tải SMTP với các thông tin cấu hình ở trên.
  const transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false, 
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  })

  const options = {
    from: adminEmail, // địa chỉ admin email bạn dùng để gửi
    to: to, // địa chỉ gửi đến
    subject: subject, // Tiêu đề của mail
    html: htmlContent // Phần nội dung mail 
  }

  // hàm transporter.sendMail() này sẽ trả về cho chúng ta một Promise
  return transporter.sendMail(options)
}

module.exports = {
  sendMail: sendMail
}
