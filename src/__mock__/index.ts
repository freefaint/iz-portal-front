import axios from 'axios';

import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
export const mock = new MockAdapter(axios, { onNoMatch: 'passthrough' });
require('./news');
require('./notice');
require('./news-id');
