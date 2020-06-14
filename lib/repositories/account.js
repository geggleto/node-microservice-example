module.exports = {
  async insertEvent(collection, event) {
    return await collection.insertOne(event);
  }
};
