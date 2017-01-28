import express from 'express'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import config from '../webpack.config'
import { getEnv }from './config/config'


import auth from './init/auth'

const app = express()
const compiler = webpack(config);
if(getEnv() === 'development') {
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    serverSideRender: false,
    stats: {
      color: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))


/* GET home page. */
app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'public/dist/index.html'))
})

// catch 404 and forward to error handler
app.use( (req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use( (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
