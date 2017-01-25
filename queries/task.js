import knex from '../knex'

const task = {
  add: add,
  getAll: getAll,
  // getByID: getByID,

}

function add( data ) {
  return knex('task').insert({
     template_task_id: data.template_task_id ,
     user_id: data.user_id ,
     is_complete: data.is_complete ,
     due_date: data.due_date ,
  })
  // .returning('*')
}

function getAll() {
  return knex.select().from('task')
}

export default task
