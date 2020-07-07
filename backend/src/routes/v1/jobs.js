const {Router} = require('express');
const jobs = Router();

const { getJobs } = require('../../middleware');

jobs.get(
	'/',
	getJobs
);

module.exports = jobs;
