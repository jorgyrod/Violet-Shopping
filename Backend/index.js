const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const loadMockData = require("./mockData/loadMockData.js");

//Guardamos lo que tenemos en LOAD_MOCK_DATA del .env
const LOAD_MOCK_DATA = process.env.LOAD_MOCK_DATA;

conn
  .sync({ force: true })
  .then(() => {
    if (LOAD_MOCK_DATA) loadMockData();
  })
  .then(() => {
    server.listen(3001, () => {
      console.log("%s listening at 3001"); // eslint-disable-line no-console
    });
  })
  .catch((err) => {
    console.log(err);
  });
