import axios from 'axios';

import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
export const mock = new MockAdapter(axios, { onNoMatch: 'passthrough' });

export const factory = <T>(fn: (id: string) => T, number: number = 15) => {
  return new Array(number).fill(true).map((i, j) => fn(j.toString()));
};
require('./news');
require('./news-id');
require('./notice');
require('./notice-id');
require('./comments');
