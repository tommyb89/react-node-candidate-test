import { getJobs } from '.';
import { data as fixture } from './data';

describe('getJobs', () => {

	it('should exist', () => {
		expect(getJobs).toEqual(expect.any(Function));
	});

	it('should return an array', () => {
		expect(getJobs()).toEqual(expect.arrayContaining(fixture));
	});

});
