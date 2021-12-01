module.exports = {
  load: {
    before: ['cors'],
  },
  settings: {
    cors: {
      enabled: true,
      origin: [
        'http://localhost:3000',
        'http://localhost:1337',
        'http://localhost',
        'http://31.31.198.206'
      ],
    },
  },
};
