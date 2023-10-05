// Connection
const 
  mongodb = require('../models/connect'),
  ObjectId = require('mongodb').ObjectId;

// Get Function
const getAllContactInformation = async (req, res, next) => {
    const result = await mongodb
      .getDB()
      .db('ContactsDB')
      .collection('Contacts')
      .find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
};

// Get Function
const getASingleContact = async (req, res, next) => {
    const userID = new ObjectId(req.params.id);
    const result = await mongodb
      .getDB()
      .db('ContactsDB')
      .collection('Contacts')
      .find({ _id: userID });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
};

// Post Function
const createContact = async (req, res) => {
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb
    .getDB()
    .db('ContactsDB')
    .collection('Contacts')
    .insertOne(contact);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'An error occurred while creating the contact.');
    }
};

// Put function
const updateContact = async (req, res) => {
    const userID = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb
      .getDB()
      .db('ContactsDB')
      .collection('Contacts')
      .replaceOne({ _id: userID }, contact);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'An error has occurred while updating the contact.');
    }
};

// Delete Function
const deleteContact = async (req, res) => {
    const userID = new ObjectId(req.params.id);
    const response = await mongodb
        .getDB()
        .db('ContactsDB')
        .collection('Contacts')
        .remove({ _id: userID }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'An error occurred while deleting the contact.');
    }
};

// Export
module.exports = { 
    getAllContactInformation, 
    getASingleContact,
    createContact,
    updateContact,
    deleteContact 
};