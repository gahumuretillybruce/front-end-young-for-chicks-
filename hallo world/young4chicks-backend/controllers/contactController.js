exports.showContactForm = (req, res) => {
  res.render('contact');
};

exports.submitContactForm = (req, res) => {
  const { name, phone, email, message } = req.body;
  console.log('Contact Form Submitted:', { name, phone, email, message });
  res.render('contact', { success: 'Thanks for reaching out! We will contact you shortly.' });
};
