const express = require('express');
const { getalltasks, creattask, delettask, upadtask, gettask } = require('../contrllers/myapi');
const { protect } = require('../middlewares/auth');
const router = express.Router();

router.route('/')
    .get(protect, getalltasks)
    .post(protect, creattask);

router.route('/:id')
    .get(protect, gettask)
    .patch(protect, upadtask)
    .delete(protect, delettask);

module.exports = router;