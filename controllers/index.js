function index(req, res, next) {
  res.render('index', { title: 'Home' });
};

module.exports.get = index;
