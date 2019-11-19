var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');
var destinationsCtrl = require('../controllers/destinations');



router.post('/:id/destinations', destinationsCtrl.create)
router.get('/:id/destinations', (req,res)=>{
    res.send('hello')
})

/* GET /movies */
router.get('/', flightsCtrl.index);

//get /movies/new
router.get('/new',flightsCtrl.new)

router.get('/:id', flightsCtrl.show);

router.post('/', flightsCtrl.create);


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
