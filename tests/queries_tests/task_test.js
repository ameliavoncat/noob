import chai, { expect } from 'chai'
import task from '../../src/database/queries/task'

describe('task', () => {
  const fakeData = {
   template_task_id: 1,
   user_id: 1,
   is_complete: false,
   due_date: '02-01-2017',
   created_at: '01-25-2017' ,
   updated_at: '01-25-2017'
  }

  it('exists', () => {
    expect(task).to.be.an('object')
  })

  it('inserts a task into the database', () => {
      task.add(fakeData).then(task => {
        console.log(task)
      })
  })
})
