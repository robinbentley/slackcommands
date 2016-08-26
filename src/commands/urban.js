import request from 'request-promise';

// report any errors - will be logged to the database
// move this into utils as it can be used over all bots
function logError(err) {
  console.log(err);
  return 'There was an error. It has been logged';
}

// format the response into something that the bot can understand
function formatResponse(response) {
  let {word, definition, example} = response;

  // wrap the whole return text in a quote and make the word *bold*
  let formattedResponse = '>>> *' + word + '* \n' + '' + definition;

  // some entries don't have examples
  // if there is an example append this to the text inside a ```code``` block
  if (example) {
    formattedResponse += '\n ```' + example + '```';
  }

  return formattedResponse;
}

// find a word - replaces individual fucntions for random word and defined word
function findWord(word = null) {
  const baseURI = 'http://api.urbandictionary.com/v0/';

  // if a word is supplied we want to define that word.
  // if no word is supplied fetch a random entry
  let requestType = word ? 'define' : 'random';

  let options = {
    uri: baseURI + requestType,
    qs: {term: word},
    json: true
  };

  let response = request(options).then((content) => {

    // if the request was successful check that it contains some results
    if (content.result_type === 'no_results') {
      return 'Nothing found! Looks like *' + word + '* isn\'t real.';
    }

    return formatResponse(content.list[0]);
  }).catch((err) => {
    return logError(err);
  });

  return response;
};


async function respond(request, reply) {
  let response = {
    username: 'Urban Bot',
    mrkdwn: true
  };

  response.text = await findWord(request.payload.text).catch((err) => {
    return logError(err);
  });

  reply(response);
};

export const endpoints = [
  {method: 'POST', path: '/urban', handler: respond}
];
