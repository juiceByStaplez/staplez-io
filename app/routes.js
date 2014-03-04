var fs = require('fs'),
  shell =  require('child_process').exec,
  child;

module.exports = function(app) {
  app.get('*', function(req, res) {
      res.sendfile('./public/index.html');
    });
  app.post('/contact', function(req, res) {
    console.log(req.body);
  });
  app.post('/deploy', function(payload) {
    var payer = payload.body.pusher;
    if (payer.name == 'themcstaplez') {
      child = shell('git pull',
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