import { Request, Response, NextFunction } from 'express';
import { getJobs } from './jobs';
import { data as fixture } from '../db/data';

const mockResponse = () => {
	const res = {} as Response;
	res.status = jest.fn().mockReturnValue(res);
	res.json = jest.fn().mockReturnValue(res);
	return res;
};

describe('getJobs middleware', () => {
	const req = {} as Request;
	const res = mockResponse();
	const next = {} as NextFunction;

	it('should return 200 response', async () => {
		await getJobs(req, res, next);
		expect(res.status).toHaveBeenCalledWith(200);
	});

	it('should return an array of jobs', async () => {
		await getJobs(req, res, next);
		expect(res.json).toHaveBeenCalledWith(fixture);
	});
});
