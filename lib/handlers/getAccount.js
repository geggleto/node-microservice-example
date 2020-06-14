module.exports = {
  handle(accountEventsCollection, AccountService, AccountAggregate) {
    return async (req, res) => {
      let events = await AccountService.findByAccountId(accountEventsCollection, req.params.accountId);

      res.json(AccountAggregate.replay(events));
    }
  }
};
