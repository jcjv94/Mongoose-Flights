var Flight = require('../models/flight');

module.exports = {
  create
};

function create(req, res) {
  console.log('before find')
  console.log(req.params.id)
    Flight.findById(req.params.id, function(err, flight) {
      console.log('after find')
      flight.destination.push(req.body);
      console.log(req.body)
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
    // Flight.findById(req.params.id, function(err, flights){
    //   console.log(flights)

    // })
  }