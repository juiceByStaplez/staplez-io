module.exports = function(app) {
  app.get('*', function(req, res) {
      res.sendfile('./public/index.html');
    });
  app.post('/deploy', function(payload) {
    console.log('payload');
  });
};