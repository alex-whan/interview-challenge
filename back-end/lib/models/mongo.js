'use strict';

class Model {
  constructor(schema) {
    this.schema = schema;
  }

  // read() performs a find() query in your schema
  get(_id) {
    if (_id) {
      let queryObject = _id ? { _id } : {};
      return this.schema.find(queryObject);
    } else {
      return this.schema.find({});
    }
  }

  // create() performs a save() query in your schema for a new record
  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  // update() performs a findOneByIdAndUpdate() operation in your schema for an existing record
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  // delete() performs a findOneByIdAndDelete() in your schema for a new record
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

// Exports a class with CRUD methods, coded to work with your schema
module.exports = Model;
