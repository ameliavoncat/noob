import knex from '../knex'

import {
  createRecord,
  findRecord,
  updateRecord,
  deleteRecord,
  findAllWhere,
  findAll } from './utilities'

const createNoob = attributes =>
  createRecord('noob', attributes).then( noob => noob )

const findNoobByHandle = github_handle =>
  findRecord('noob', 'github_handle', github_handle).then(noob => noob)

const updateNoobByHandle = (github_handle, attributes) =>
  updateRecord('noob', 'github_handle', github_handle, attributes).then(noob => noob)

const deleteNoobByHandle = github_handle =>
  deleteRecord('noob', 'github_handle', github_handle)

const getAllNoobsByStartDate = start_date =>
  findAllWhere('noob', 'start_date', start_date).then(noob => noob)

const findAllNoobs = () =>
  findAll('noob').then(noob => noob)

const graduateNoob = github_handle => {
  return knex.transaction((t) => {
    return knex('noob')
      .transacting(t)
      .where('github_handle', github_handle)
      .then(result => {
        result[0].role = 'mentor'
        delete result[0].mentor_id
        delete result[0].start_date
        return knex('users')
          .transacting(t)
          .insert(result[0])
          .then(_ => {
            return knex('noob')
            .where('github_handle', github_handle)
            .del()
          })
      })
      .then(t.commit)
      .catch(t.rollback)
  })
}


export {
  createNoob,
  findNoobByHandle,
  updateNoobByHandle,
  deleteNoobByHandle,
  getAllNoobsByStartDate,
  findAllNoobs,
  graduateNoob
}
