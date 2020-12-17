'use strict';

// Generic "CRUD" class of Model to detach Color model from dependency on MongoDB specifically
class Model {
  constructor(schema) {
    this.schema = schema;
  }

  // performs a find() query on the passed-in schema
  get(_id) {
    if (_id) {
      let queryObject = _id ? { _id } : {};
      return this.schema.find(queryObject);
    } else {
      return this.schema.find({});
    }
  }

  // performs a save() query in the schema for a new document
  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  // // update() performs a findOneByIdAndUpdate() operation in your schema for an existing record
  // update(_id, record) {
  //   return this.schema.findByIdAndUpdate(_id, record, { new: true });
  // }

  // // delete() performs a findOneByIdAndDelete() in your schema for a new record
  // delete(_id) {
  //   return this.schema.findByIdAndDelete(_id);
  // }
}

module.exports = Model;
