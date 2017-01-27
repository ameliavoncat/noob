import chai, { expect } from 'chai'
import knex from '../../database/knex'
import * as User from '../../database/queries/users'

describe('user', () => {
  const newUser = [
    {
      full_name: "Ugly Face",
      github_handle: "Trump_Butt",
      role: 'mentor',
      email: 'fart_monster@hemorroid.butt',
    },
    {
      full_name: "Nice Person",
      github_handle: "Drake_fabulous",
      role: 'mentor',
      email: 'youfancynow@ovo.com',
    },
    {
      full_name: "Nancy Drew",
      github_handle: "mystery_solved",
      role: 'mentor',
      email: 'isolvedthemystery@detective.org',
    }
  ]

  it('exists', () => {
    expect(User).to.be.a('object')
  })

  describe('createUser', () => {
    it('inserts user into table', () => {
      return User.createUser(newUser[0]).then(user => {
        expect(user.full_name).to.equal('Ugly Face')
      })
    })
  })

  describe('findUserByHandle', () => {
    it('return the all of the user data related to github_handle', () => {
      return User.createUser(newUser[1])
      .then(_ => {
        User.findUserByHandle('Drake_fabulous')
        .then(user => {
          expect(user.full_name).to.equal('Nice Person')
        })
      })
    })
  })

  describe('updateUserByHandle', () => {
    it('updates the name of a user associated with github_handle', () => {
      return User.createUser(newUser[2])
      .then(_ => {
        User.updateUserByHandle('mystery_solved', {full_name: 'Veronica Mars'})
        .then(user => {
          expect(user.full_name).to.equal('Veronica Mars')
        })
      })
    })
  })

  describe('deleteUserByHandle', () => {
    it('removes user associated with github_handle from database', () => {
      return User.deleteUserByHandle('Trump_Butt').then(_ => {
        User.findUserByHandle('Trump_Butt')
        .then(empty => {
          expect(empty).to.be.equal( undefined )
        })
      })
    })
  })

  describe('findUsersByRole', () => {
    it('finds the role associated with user', () => {
      return User.findUsersByRole('mentor').then(user => {
        for(let mentor of user){
          expect(mentor.role).to.be.equal('mentor')
        }
      })
    })
  })

  describe('findAllUsers', () => {
    it('finds all the users in the users table', () => {
      return User.findAllUsers('mentor').then(user => {
        let count = 0
        for(let entry of user){
          count += 1
        }
        expect(user.length).to.be.equal(count)
      })
    })
  })

})
