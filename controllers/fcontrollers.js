//const qureymodel = require('../models/fmodels');
//const nodemailer = require('nodemailer');

// Home Page
exports.home =async(req, res)=>{
    res.locals.title = "Home";
    res.render('home');
}

// About us
exports.abouts =async(req, res)=>{
    res.locals.title = "About Us";
    res.render('abouts');
}

// Contact Us
exports.contactus =async(req, res)=>{
    res.locals.title = "Contact Us";
    res.render('contactus');
}

// Portfolio
exports.portfolio =async(req, res)=>{
    res.locals.title = "Portfolio";
    res.render('portfolio');
}

// services
exports.services =async(req, res)=>{
    res.locals.title = "Services";
    res.render('services');
}