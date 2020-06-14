module.exports = {
  handle(accountEventsCollection, AccountService, AccountAggregate, AccountRepository) {
    return async (req, res) => {

      //just using basic validation... you should add more
      if (req.body && req.body.accountId && req.body.email) {

        let c = await AccountService.findByEmail(accountEventsCollection, req.body.email);

        if (c.length > 0) {
          return res.status(400).json({"error" : "account already exists"});
        }

        let agg = AccountAggregate.make(req.body.accountId, req.body.email);

        await AccountRepository.insertEvent(accountEventsCollection, agg);

        return res.json(agg);
      }

      return res.status(400);
    }
  }
};
