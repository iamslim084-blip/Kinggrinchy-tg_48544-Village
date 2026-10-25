'use strict';

const { main } = require('./main');

describe('main entry point', () => {
  test('loads and exports main', () => {
    expect(typeof main).toBe('function');
  });
});
