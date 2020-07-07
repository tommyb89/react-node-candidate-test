const { getJobs } = require('./jobs');
const fixture = require('../db/data');

const mockResponse = () => {
	const res = {};
	res.status = jest.fn().mockReturnValue(res);
	res.json = jest.fn().mockReturnValue(res);
	return res;
};

describe('getJobs middleware', () => {
	const req = mockResponse();
	const res = mockResponse();

	it('should return 200 response', async () => {
		await getJobs(req, res);
		expect(res.status).toHaveBeenCalledWith(200);
	});

	it('should return an array of jobs', async () => {
		await getJobs(req, res);
		expect(res.json).toHaveBeenCalledWith(fixture);
	});
});
