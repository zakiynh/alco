const router = require('express').Router();
const Controller = require('../controllers/offerController');

router.get('/', Controller.getAllOffers);
router.get('/:id', Controller.getOfferId)
router.post('/add', Controller.createOffer);
router.put('/update/:id', Controller.updateOffer);
router.delete('/delete/:id', Controller.deleteOffer);

module.exports = router;