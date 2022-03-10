import { data } from './data';
import { IJobCard } from './interfaces';

export const getJobs = (): IJobCard[] => {
	return data;
};