import request from 'request-promise';

import { logError } from '../utils/logger';
import { formatBold, formatCodeBlock } from '../utils/textFormatter';

/**
 * format the response into markdown for the bot output
 * @param  {Object} responseObject  word returned from the request
 * @return {string}                 formatted string
 */
const _formatResponse = responseObject => {
  let { word, definition, example } = responseObject;
  let formattedResponse = formatBold(word) + '\n' + definition;

  // some words don't have examples
  if (example) {
    formattedResponse += '\n' + formatCodeBlock(example);
  }

  return formattedResponse;
};

/**
 * request a word from the API
 * @param  {string} word  word to define
 * @return {string}       formatted string
 */
const _findWord = word => {
  let requestType = word ? 'define' : 'random';

  const options = {
    uri: 'http://api.urbandictionary.com/v0/' + requestType,
    qs: { term: word },
    json: true
  };

  let response = request(options)
    .then(content => {
      if (content.result_type === 'no_results') {
        return 'Nothing found! Looks like ' + formatBold(word) + " isn't real.";
      }

      return _formatResponse(content.list[0]);
    })
    .catch(err => {
      return logError(err);
    });

  return response;
};

/**
 * base handler for any post request to /urban
 * @param  {Object} request hapi request
 * @param  {Object} reply   hapi reply
 * @return {Object}         return the response for the bot
 */
async function urban(request, reply) {
  let response = {
    username: 'Urban Bot',
    mrkdwn: true,
    response_type: 'in_channel' // eslint-disable-line camelcase
  };

  // check auth token matches
  if (request.payload.token !== process.env.URBAN_TOKEN) {
    reply('Invalid Token').code(401);
  } else {
    response.text = await _findWord(request.payload.text).catch(err =>
      logError(err)
    );

    reply(response);
  }
}

export const endpoints = [{ method: 'POST', path: '/urban', handler: urban }];
