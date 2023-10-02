// connection
const mongodb = require('../models/connect');
const ObjectID = require('mongodb').ObjectID;

const getContactInformation = async (req, res, next) => {
    const result = await mongodb.getDB().db().collection('contactUsers').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  };

  const getSingle = async (req, res, next) => {
    const userID = new ObjectID(req.params.id);
    const result = await mongodb
      .getDB()
      .db()
      .collection('contactUsers')
      .find({ _id: userID });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };
  
  // export
  module.exports = { getContactInformation, getSingle };