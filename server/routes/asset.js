const router = require('express').Router();
const Controller = require('../controllers/assetController');

router.get('/', Controller.getAllAsset);
router.get('/:id', Controller.getAssetById);

module.exports = router;