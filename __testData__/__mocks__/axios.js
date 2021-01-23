import { sampleData } from '../sampleData';

export default {
  get: jest.fn((arg) => {
    getURL = arg;
    return Promise.resolve({ sampleData })
  }),
};
