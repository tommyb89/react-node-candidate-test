const db = require('../db');

const getJobs = async (req, res, next) => {
	try {
		const jobs = await db.getJobs();
		res.status(200).json(jobs);
	}
	catch (e) {
		next(e);
	}
};

module.exports = {
	getJobs
};
