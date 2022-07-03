const router = require('express').Router();
const Controller = require('../controllers/invoiceController');

router.get('/', Controller.getAllInvoices);
router.post('/add', Controller.createInvoice);

module.exports = router;