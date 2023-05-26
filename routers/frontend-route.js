const router = require('express').Router();
const express = require('express');
//const multer = require('multer');
const path = require('path');

const f_controllers = require('../controllers/fcontrollers');
//frontend
router.get('/',f_controllers.home);
router.get('/abouts',f_controllers.abouts);
router.get('/contactus',f_controllers.contactus);
router.get('/portfolio',f_controllers.portfolio);
router.get('/services',f_controllers.services);

module.exports = router;