import knex from '../knex'

import {
  createRecord,
  findRecord,
  updateRecord,
  deleteRecord,
  findAllWhere,
  findAll } from './utilities'

const createUser = attributes =>
  createRecord('users', attributes).then( user => user )

const findUserByHandle = github_handle =>
  findRecord('users', 'github_handle', github_handle).then(user => user)

const updateUserByHandle = (github_handle, attributes) =>
  updateRecord('users', 'github_handle', github_handle, attributes).then(user => user)

const deleteUserByHandle = github_handle =>
  deleteRecord('users', 'github_handle', github_handle)

const findUserByRole = role =>
  findAllWhere('users', 'role', role ).then(user => user)

const findAllUsers = () =>
  findAll('users').then(user => user)

export default {
  createUser,
  findUserByHandle,
  updateUserByHandle,
  deleteUserByHandle,
  findUserByRole,
  findAllUsers
          }
