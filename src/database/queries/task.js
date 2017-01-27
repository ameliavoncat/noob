import knex from '../knex'
import * as _ from './utilities'

const addTask = attributes =>
  _.createRecord( 'task', attributes )

const getAllTasks = () =>
  _.findAll( 'task' )

const getTaskBy = ( column, data ) =>
  _.findAllWhere( 'task', column, data )

const updateTask = ( column, data, attributes ) =>
  _.updateRecord( 'task', column, data, attributes )

const expungeTask = ( column, data ) =>
  _.deleteRecord( 'task', column, data )

const deleteAllTasks = () =>
  _.deleteAll( 'task' )

const task = {
  add: addTask,
  getAll: getAllTasks,
  getBy: getTaskBy,
  update: updateTask,
  expunge: expungeTask,
  deleteAll: deleteAllTasks
}

export default task
