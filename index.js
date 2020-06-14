const express = require('express')
const app = express();
const port = 8080;
const MongoClient = require('mongodb').MongoClient;

const AccountAggregate = require('./lib/aggregates/account');
const AccountService = require('./lib/services/account');
const AccountRepository = require('./lib/repositories/account');
const CreateAccountHandler = require('./lib/handlers/createAccount');
const GetAccountHandler = require('./lib/handlers/getAccount');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message : "ok" });
});

MongoClient.connect('mongodb://mongo/event_store', { useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected to Database');

    let db = client.db('account_event_store');

    let accountEventsCollection = db.collection('account_events');

    //Create a new account
    app.post('/account', CreateAccountHandler.handle(accountEventsCollection, AccountService, AccountAggregate, AccountRepository));

    //Get Account
    app.get('/account/:accountId', GetAccountHandler.handle(accountEventsCollection, AccountService, AccountAggregate));

    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

  })
  .catch(error => console.error(error));
