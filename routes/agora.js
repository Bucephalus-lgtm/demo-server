/**
 * @author Bhargab Nath 10 March 2023
 */

const express = require("express");
const router = express.Router();

const AgoraController = require('../controllers/agora');

router.post('/', AgoraController.createRTCToken);

module.exports = router;