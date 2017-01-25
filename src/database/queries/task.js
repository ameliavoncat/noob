import knex from 'knex'

const task = {
  add: add,
  getAll: getAll,
  // getByID: getByID,

}

function add( data ) {
  knex('task').insert([
    { template: data.template },
    { user_id: data.user_id },
    { is_complete: data.is_complete },
    { due_date: data.due_date },
    { created_at: data.template },
    { template: data.template },
  ])
  .returning('*')
}

function getAll() {
  return knex.select().from('task')
}

export default task
