const express = require('express');
const router = express.Router();
const offerRouter = require('./offer');
const userRouter = require('./users');
const projectRouter = require('./project');
const assetRouter = require('./asset');
const invoiceRouter = require('./invoice');

router.use('/customers', offerRouter)
router.use('/user', userRouter)
router.use('/project', projectRouter)
router.use('/asset', assetRouter)
router.use('/invoice', invoiceRouter)

module.exports = router;