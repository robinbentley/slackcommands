const dank = (request, reply) => {
  reply('Dank');
};

export const endpoints = [
  {method: 'POST', path: '/dank', handler: dank}
];
