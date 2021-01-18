const mongoClient = require('mongodb').MongoClient;
require('dotenv').config();

// usando mongodb com usuário e senha
// para rodar localmente teste
const user = encodeURIComponent(process.env.DB_USER);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const authMechanism = 'DEFAULT';

const DB_URL = `mongodb://${user}:${password}@localhost:27017/?authMechanism=${authMechanism}`;

let schema = null;

const connection = async () => {
  if (schema) return Promise.resolve(schema);

  return mongoClient
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(process.env.DB_NAME))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema;
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = connection;
