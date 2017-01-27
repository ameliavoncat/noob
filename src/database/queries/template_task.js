import knex from '../knex'
import * as _ from './utilities'

const addTemplateTask = attributes =>
  _.createRecord( 'template_task', attributes )

const deleteAllTemplateTasks = () =>
  _.deleteAll( 'template_task' )

const getAllTemplateTasks = () =>
  _.findAll( 'template_task' )

const getTemplateTaskBy = ( column, data ) =>
  _.findAllWhere( 'template_task', column, data )

const updateTemplateTask = ( column, data, attributes ) =>
  _.updateRecord( 'template_task', column, data, attributes )

const template_task = {
  add: addTemplateTask,
  deleteAll: deleteAllTemplateTasks,
  getAll: getAllTemplateTasks,
  getBy: getTemplateTaskBy,
  update: updateTemplateTask
}

export default template_task
