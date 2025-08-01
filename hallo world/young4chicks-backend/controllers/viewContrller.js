exports.getHome = (req, res) => {
  res.render('index', { title: 'Young4ChickS' });
};

exports.getAbout = (req, res) => {
  res.render('about', { title: 'About Us' });
};

exports.getLogin = (req, res) => {
  res.render('login', { title: 'Farmer Login' });
};

exports.getSignup = (req, res) => {
  res.render('signup', { title: 'Register as a Young Farmer' });
};

exports.getChickRequest = (req, res) => {
  res.render('request', { title: 'Request Chicks' });
};

exports.getDashboard = (req, res) => {
  res.render('dashboard', { title: 'Farmer Dashboard' });
};

exports.getContact = (req, res) => {
  res.render('contact', { title: 'Contact Us' });
};
