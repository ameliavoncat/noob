import chai, { expect } from 'chai'
import * as _ from '../../src/database/queries/utilities'


describe('utilties', () => {

  const fakeData = [
    {
      template_task_id: 1,
      user_id: 1,
      is_complete: false,
      due_date: '02-01-2017'
    },
    {
      template_task_id: 2,
      user_id: 2,
      is_complete: true,
      due_date: '02-01-2017'
    },
    {
      template_task_id: 3,
      user_id: 3,
      is_complete: false,
      due_date: '02-01-2017'
    }
  ]

  const updatedTask = {
    template_task_id: 9,
    user_id: 25,
    is_complete: true,
    due_date: '01-01-2019'
  }

  it('is an object', () => {
    expect(_).to.be.a('object')
  })

  it('adds a record to the table and returns it', () => {
    return _.createRecord('task', fakeData[0]).then( task => {
      expect(task.user_id).to.equal(1)

      return _.findAllWhere('task', 'user_id', 1).then( task => {
        expect(task[0].user_id).to.equal(1)
      })
    })
  })

  _.createRecord('task', fakeData)

  it('finds all records', () => {
    return _.findAll('task').then( task => {
      expect(task[0].user_id).to.equal(1)
      expect(task[1].user_id).to.equal(2)
      expect(task[2].user_id).to.equal(3)
    })
  })

  it('updates a record', () => {
    return _.updateRecord('task', 'user_id', 3 ,updatedTask).then( task => {
      expect(task.user_id).to.equal(25)
    })
  })

  it('deletes a record', () => {
    return _.deleteRecord('task', 'user_id', 2).then ( task => {
      return _.findAllWhere('task', 'user_id', 2).then ( task => {
        expect(task).to.deep.equal([])
      })
    })
  })

})
