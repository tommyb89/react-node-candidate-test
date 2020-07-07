const { getJobs } = require('./');
const fixture = require('./data');

describe('getJobs', () => {

	it('should exist', () => {
		expect(getJobs).toEqual(expect.any(Function));
	});

	it('should return an array', () => {
		expect(getJobs()).toEqual(expect.arrayContaining(fixture));
	});

});
