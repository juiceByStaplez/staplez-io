var fs = require('fs'),
  shell =  require('child_process').exec,
  child,
  mailer = require('nodemailer');

module.exports = function(app) {
  app.get('*', function(req, res) {
      res.sendfile('../public/index.html');
    });
  app.post('/contact', function(req, res) {
    var formData = req.body;
    var name = formData.name;
    var email = formData.email;
    var message = formData.message;
    var transport = mailer.createTransport("SMTP", {
      service: "Gmail",
      auth: {
        user: "mc@staplez.io",
        pass: "Address123"
      }
    });
    var mailOptions = {
      from: name + ' ' +email,
      to: 'mc@staplez.io',
      subject: "New contact form submission",
      text: message,
      html: "<p>"+ message+"</p>"
    }

    transport.sendMail(mailOptions, function(error, response) {
      if(error){
        console.log(error);
      } else {
        console.log("Message sent" + response.message);
      }
    });
  });
  app.post('/deploy', function(payload) {
    var payer = payload.body.pusher;
    if (payer.name == 'themcstaplez') {
      child = shell('git pull origin master',
        function(error, stdout, stderr) {
          if (error != null) {
            console.log('exec error: ' + error)
          } else {
            console.log('Deploy successful!');
          }
      });
    }
  });
};