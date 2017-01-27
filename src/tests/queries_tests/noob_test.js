import chai, { expect } from 'chai'
import knex from '../../database/knex'
import * as Noob from '../../database/queries/noob'

describe('noob', () => {
  const newNoobs = [
    {
      full_name: "New Noobie",
      github_handle: "beep_bop",
      role: 'noob',
      start_date: '2017-01-12',
      email: 'newperson@newness.com',
    },
    {
      full_name: "Shoe",
      github_handle: "Just_a_Shoe",
      role: 'noob',
      start_date: '2017-01-12',
      email: 'aRealLiveShoe@realshoe.com',
    },
    {
      full_name: "Solange K-nowels",
      github_handle: "dont_touch_my_hair",
      role: 'noob',
      start_date: '2017-01-12',
      email: 'IHitJZ@elevator.com',
    },
    {
      full_name: "Foot",
      github_handle: "smelly_foot",
      role: 'noob',
      start_date: '2017-02-12',
      email: 'so_smelly@PU.com',
    }
  ]

  it('exists', () => {
    expect(Noob).to.be.a('object')
  })

  describe('createNoob', () => {
    it('inserts noob into table', () => {
      return Noob.createNoob(newNoobs[0]).then(noob => {
        expect(noob.full_name).to.equal('New Noobie')
      })
    }),
    it('increase the size fo the noobs table', () => {
      return Noob.findAllNoobs().then(noob =>{
        expect(noob.length).to.equal(1)
      })
    })
  })

  describe('findNoobByHandle', () => {
    it('return the all of the noob data related to github_handle', () => {
      return Noob.createNoob(newNoobs[1])
        .then(_ => {
          Noob.findNoobByHandle('Just_a_Shoe')
          .then(noob => {
            expect(noob.full_name).to.equal('Shoe')
          })
        })
    })
  })

  describe('updateNoobByHandle', () => {
    it('updates the name of a noob associated with github_handle', () => {
      return Noob.createNoob(newNoobs[2])
      .then(_ => {
        Noob.updateNoobByHandle('dont_touch_my_hair', {full_name: 'Da REAL Solange'})
        .then(noob => {
          expect(noob.full_name).to.equal('Da REAL Solange')
        })
      })
    })
  })

  describe('deleteNoobByHandle', () => {
    it('removes noob associated with github_handle from database', () => {
      return Noob.deleteNoobByHandle('Just_a_Shoe').then(_ => {
        Noob.findNoobByHandle('Just_a_Shoe')
        .then(empty => {
          expect(empty).to.be.equal( undefined )
        })
      })
    })
  })

  describe('getAllNoobsByStartDate', () => {
    it('finds all noobs with the same start_date', () => {
      return Noob.getAllNoobsByStartDate('2017-01-12').then(noob => {
        expect(noob.length).to.be.equal(2)
      })
    })
  })

  describe('findAllNoobs', () => {
    it('finds all the noobs in the noobs table', () => {
      return Noob.findAllNoobs().then(noob => {
        expect(noob.length).to.be.equal(2)
      })
    })
  })

  describe('graduateNoob', () => {
    it('graduates a noob to mentor', () => {
      return Noob.graduateNoob('dont_touch_my_hair').then(_ => {
        Noob.findNoobByHandle('dont_touch_my_hair').then(empty => {
          expect(empty).to.be.equal( undefined )
        })
      })
    })
  })

})
