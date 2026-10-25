'use strict';

// Note: `src/universal` is a plain file, so the config module lives in `src/`.

const LOG_LEVELS = ['debug', 'info', 'warn', 'error'];

function loadConfig(env = process.env) {
  const errors = [];

  const botToken = (env.BOT_TOKEN || '').trim();
  if (!botToken) {
    errors.push('BOT_TOKEN is required (set it in your environment or .env file)');
  }

  const logLevel = (env.LOG_LEVEL || 'info').trim().toLowerCase();
  if (!LOG_LEVELS.includes(logLevel)) {
    errors.push(`LOG_LEVEL must be one of ${LOG_LEVELS.join(', ')} (got "${env.LOG_LEVEL}")`);
  }

  if (errors.length > 0) {
    throw new Error(`Invalid configuration:\n- ${errors.join('\n- ')}`);
  }

  return Object.freeze({ botToken, logLevel });
}

module.exports = { loadConfig, LOG_LEVELS };
