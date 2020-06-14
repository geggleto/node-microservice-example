module.exports = {
  replay(history) {
    let account = history.reduce(function (acc, value) {
      return Object.assign(value, acc);
    }, {});

    return account;
  },
  make(accountId, email) {
    return {
      accountId: accountId,
      email : email
    };
  }

};
