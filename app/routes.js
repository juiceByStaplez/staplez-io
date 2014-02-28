var fs = require('fs'),
  shell =  require('child_process').exec,
  child;
module.exports = function(app) {
  app.get('*', function(req, res) {
      res.sendfile('./public/index.html');
    });
  app.post('/deploy', function(payload) {
    var payer = payload.body.pusher;
    if (payer.name == 'themcstaplez') {
      child = exec('git pull',
        function(error, stdout, stderr) {
          console.log('stdout:' + stdout);
          console.log('stderr:' + stderr);
          if (error != null) {
            console.log('exec error: ' + error)
          }
      });
    }
  });
};