const express = require('express');
const validator = require('./utils/validator');
const { getAll, save } = require('./services');
const ParticipantsRouter = express.Router();

ParticipantsRouter.route('/participants')
  .get(async (_req, res, _next) => {
    const participants = await getAll();
    res.json(participants);
  })
  .post(async (req, res, _next) => {
    const user = req.body;
    const errors = validator(user);
    await save(user);
    errors ? res.status(400).json(errors) : res.json({message: 'Se dio de alta satisfactoriamente al participante'});
  });

module.exports = ParticipantsRouter;