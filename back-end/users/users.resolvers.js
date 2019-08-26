const uuid = require('uuid/v4');
const faker = require('faker');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret';
const users = [];

const createUser = (_, args) => {
  const { username, password } = args;
  const alreadyExist = users.find(
    user => username === user.username && password === user.password
  );
  if (alreadyExist) {
    throw 'user already exist';
  }
  const user = {
    id: uuid(),
    name: faker.name.findName(),
    username,
    password
  };
  users.push(user);
  const token = jwt.sign({ sub: user.id }, JWT_SECRET);
  return {
    user,
    token
  };
};

const login = (_, args) => {
  const { username, password } = args;
  const user = users.find(
    user => username === user.username && password === user.password
  );
  if (!user) {
    throw 'the username or password is incorrect';
  }
  const token = jwt.sign({ sub: user.id }, JWT_SECRET);
  return {
    user,
    token
  };
};

const isLog = request => {
  if (request.headers.authorization) {
    const token = request.headers.authorization.replace('Bearer', '');
    try {
      const { sub } = jwt.verify(token, JWT_SECRET);
      const user = users.find(user => sub === user.id);
      if (user) {
        return true;
      }
    } catch (err) {}
  }
  return false;
};

module.exports = {
  Resolver: {
    Mutation: {
      createUser,
      login
    }
  },
  utils: {
    isLog
  }
};
