const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Load Person Model
const Person = require('../../models/Person');

// Import Validator
const validatePersonInputs = require('../../validator/personValidator');

// @route  GET api/persons/test
// @desc   Tests persons route
// @access Public
router.get('/test', (req, res) => res.json({ msg: "Users Works" }));

// @route  GET api/persons/
// @desc   Get all person data
// @access Public
router.get('/', (req, res) => {
  Person.find()
    .then(profiles => {
      if (!profiles) {
        res.status(404).json({ noprofile: 'There are no persons.' });
      }
      res.json(profiles);
    })
    .catch(err => res.status(404).json({ noprofile: 'There are no persons.' }));
})

// @route  GET api/persons/:id
// @desc   Get person data
// @access Public
router.get('/:id', (req, res) => {
  Person.findOne({ _id: req.params.id })
    .then(profiles => {
      if (!profiles) {
        res.status(404).json({ noprofile: 'There are no person with that ID.' });
      }
      res.json(profiles);
    })
    .catch(err => res.status(404).json({ noprofile: 'There are no person.' }));
})

// @route  POST api/persons/create
// @desc   Create person data
// @access Public (with authentication should be Private)
router.post('/create', (req, res) => {

  //Validate inputs
  const errors = validatePersonInputs(req.body);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  new Person({
    name: req.body.name,
    surname: req.body.surname,
    city: req.body.city,
    address: req.body.address,
    phone: req.body.phone
  }).save()
    .then(person => res.json(person))
    .catch(err => console.log(err));
});

// @route  POST api/persons/:id
// @desc   Update person data
// @access Public (with authentication should be Private)
router.put('/:id', (req, res) => {

  //Validate inputs
  const errors = validatePersonInputs(req.body);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  Person.findOne({ _id: req.params.id })
    .then(person => {

      if (!person) {
        return res.status(404).json({ personnotexists: 'Person does not exists.' })
      }

      const personFields = {
        name: req.body.name,
        surname: req.body.surname,
        city: req.body.city,
        address: req.body.address,
        phone: req.body.phone
      }

      //Update
      Person.findOneAndUpdate({ _id: req.params.id },
        { $set: personFields },
        { new: true })
        .then(person => res.json(person))
    })
    .catch(err => console.log(err))
})

// @route  DELETE api/persons/:id
// @desc   Delete person 
// @access Public (with authentication should be Private)
router.delete('/:id', (req, res) => {
  Person.findOneAndRemove({ _id: req.params.id })
    .then(() => res.json({ success: true }))
    .catch(err => console.log(err));
})



module.exports = router;