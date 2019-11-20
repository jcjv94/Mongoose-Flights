var Ticket = require('../models/ticket');
var Flight = require('../models/flight')

module.exports = {
  new: newTicket,
  create,
  addTicket
};

function addTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.tickets.push(req.body);
      console.log(req.body, '<<<<req body<<<<<')
      console.log(req.body.ticketId, '<<<<req body tiketID<<<<<')
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }

  // async function addTicket(req, res) {
  //   try{
  //     const flightOne = await Flight.findById(req.params.id)
  //     const ticketOne = await Ticket.create(req.body)
  //     flightOne.tickets.push(ticketOne);
  //     flightOne.save()
  //     res.redirect(`/flights/${flightOne._id}`)
  //   } catch(err){
  //     return err
  //   }
  // }

function create(req, res) {
  Ticket.create(req.body, function(err, performer) {
    res.redirect('/flights');
  });
}


function newTicket(req, res) {
  Ticket.find({}, function(err, tickets) {
    res.render('tickets/new', {
      title: 'Add Ticket',
      flight: req.params.id
    });
  })
}