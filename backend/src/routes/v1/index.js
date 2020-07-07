const { Router } = require("express");

const jobs = require('./jobs');

const v1 = Router();

v1.use('/jobs', jobs);

module.exports = v1;
