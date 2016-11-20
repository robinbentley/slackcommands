const memes = ['aliens', 'success','foulfrog','confession'];
const response = {
  username: 'Dank Bot',
  mrkdwn: true,
};

const _create = (reply, text) => {
  reply(text);
};

const _list = (reply) => {
  response.text = 'Available memes: ' + memes;

  reply(response);
};

const dank = (request, reply) => {

  // check auth token matches
  if (request.payload.token !== process.env.DANK_TOKEN) {
    reply('Invalid Token').code(401);
  } else {

    if (request.payload.text.trim() === 'list') {
      _list(reply);
    } else {
      _create(reply, request.payload.text);
    }
  }
};

export const endpoints = [
  {method: 'POST', path: '/dank', handler: dank}
];
