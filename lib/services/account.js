module.exports = {
  async findByEmail(collection, email) {
    return await collection.find({
      email : email
    }).toArray();
  },

  async findByAccountId(collection, accountId) {
    return await collection.find({
      accountId : parseInt(accountId)
    }).project({_id:0}).toArray();
  }
};
