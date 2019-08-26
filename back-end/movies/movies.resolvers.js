const movies = (_, __, ctx) => {
  return [
    {
      title: 'lol',
      year: 2434,
      rating: 3434,
      actors: [
        {
          name: 'actor name',
          birthday: '23-08-2999',
          country: 'los angeles',
          directors: [
            {
              name: 'director name',
              birthday: '12-04-2999',
              country: 'paris'
            }
          ]
        }
      ]
    }
  ];
};

module.exports = {
  Query: {
    movies
  },
  Movie: {
    scoutbase_rating(_, args, ctx) {
      if (ctx.isLog) {
        return `${(Math.random() * 4 + 5).toFixed(1)}`;
      }
    }
  }
};
