const express = require('express');
const router = express.Router();
const Contact = require('../models/contactUs');

/* GET home page. */


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/contactus',cors.corsWithOptions, async (req, res) => {
//   // res.send(req.body);
//   console.log(req.body);
//   // const contact = new Contact({ ...req.body });
//   // console.log(contact);
//   // contact.save();
//   // console.log(contact);
//   // res.redirect('/');


//   Contact.create(req.body)
//   .then((l) => {
//       console.log('Contact Dets Stored', l);
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'application/json');
//       res.json(l);
//   }, (err) => console.log(err))
//   .catch((err) => console.log(err));
// })

module.exports = router;
