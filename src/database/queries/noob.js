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
  let updatedAttributes = findRecord( 'noob', 'github_handle', github_handle )
  updatedAttributes.role = 'mentor'
  deleteRecord('noob', 'github_handle', github_handle)
  createRecord( 'user', 'github_handle', github_handle, updatedAttributes ).then(user => user)
}

export default {
  createNoob,
  findNoobByHandle,
  updateNoobByHandle,
  deleteNoobByHandle,
  getAllNoobsByStartDate,
  findAllNoobs,
  graduateNoob
}
