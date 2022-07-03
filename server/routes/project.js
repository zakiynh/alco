const router = require('express').Router();
const Controller = require('../controllers/projectController');

router.get('/', Controller.getProject);
router.post('/add', Controller.addProject);

module.exports = router