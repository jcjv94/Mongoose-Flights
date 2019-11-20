var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
  index,
  show,
  new: newFlight,
  create
};

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render('flights', {
      flights
    });
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight){
    Ticket.find({"flight": flight._id}, function(err, tickets){
      res.render('flights/show', {
        title: "Flight Details",
        flight,
        tickets
      })
    })
  })
  // Flight.findById(req.params.id)
  // .populate('ticket').exec(function(err, flight) {
  //   Ticket.find(
  //     {_id: {$nin: flight.ticket}},
  //     function(err, tickets){
  //       console.log(tickets);
  //       res.render('flights/show', {
  //         title: 'Flight Details', flight, tickets
  //       });
  //     }
  //   );
  // });
}

function create(req, res) {
  req.body.nowFlying = !!req.body.nowFlying;
  // req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  // if (req.body.cast) req.body.cast = req.body.cast.split(',');
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  // var departs = new departs(req.body);
  var flight = new Flight(req.body);
  // var airport = new airport(req.body);

  // console.log(req.body.departs)
  flight.save(function (err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect(`/flights/${flight._id}`);
  });
}

function newFlight(req, res) {
  res.render('flights/new');
}