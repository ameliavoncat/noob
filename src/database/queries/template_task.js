import knex from '../knex'
import * as task from './task'
import * as _ from './utilities'

const add = attributes =>
  _.createRecord( 'template_task', attributes )

const deleteAll = () =>
  _.deleteAll( 'template_task' )

const getAll = () =>
  _.findAll( 'template_task' )

const getBy = ( column, data ) =>
  _.findAllWhere( 'template_task', column, data )

const update = ( id, attributes ) =>
  _.updateRecord( 'template_task', 'id', id, attributes )

const expunge = ( column, data ) =>
  _.deleteRecord( 'template_task', column, data )

const convert = user_id =>

  somethingHappens.then( templateTask =>
    if ( templateTask.user_role === role ) {
      let attributes = {
        user_id: user_id,
        body: templateTask.body,
        is_complete: false,
        due_date: now + templateTask.days_to_complete
        template_task_id: templateTask.id,
      }
      task.add(attributes)
    }
  )

//forEach templateTask
//check if user has role
//if so, add new task assigned to provided user_id

export { add, deleteAll, getAll, getBy, update, expunge, convert }
