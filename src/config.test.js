'use strict';

const { loadConfig } = require('./config');

describe('loadConfig', () => {
  test('returns values with defaults', () => {
    expect(loadConfig({ BOT_TOKEN: 'abc' })).toEqual({ botToken: 'abc', logLevel: 'info' });
  });

  test('throws a clear error when BOT_TOKEN is missing', () => {
    expect(() => loadConfig({})).toThrow(/BOT_TOKEN is required/);
  });

  test('throws on invalid LOG_LEVEL', () => {
    expect(() => loadConfig({ BOT_TOKEN: 'abc', LOG_LEVEL: 'loud' })).toThrow(/LOG_LEVEL/);
  });
});
