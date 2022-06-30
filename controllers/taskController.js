const factory = require('./handleFactory');
const Task = require('../models/taskModel');


exports.getAllTask = factory.getAll(Task);
exports.createTask = factory.createOne(Task);
exports.getTask = factory.getOne(Task);