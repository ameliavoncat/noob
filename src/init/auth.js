import { addUserToRequestFromJWT } from '@learnersguild/idm-jwt-auth/lib/middlewares'

const URL = 'http://idm.learnersguild.dev'
const REDIRECT = encodeURIComponent('http://noob.learnersguild.dev')

const init = app => {
  app.use( addUserToRequestFromJWT )
  app.use( ensureUserLoggedIn )
}

const ensureUserLoggedIn = (req, res, next) => {
  if ( !req.user ) {
    return res.redirect(`${URL}/sign-in?redirect=${REDIRECT}`)
  }
  next()
}

export default init
