const router = require('express').Router()
const data = require('../src/owid-covid-data.json')
const serverInfo = require('./serverInfo')
const seriesDataExtractor = require('./seriesDataExtractor')

/* GET / */
router.get('/',   (req, res, next) => {
  res.status(200)
  res.json(serverInfo)
  }  
)

// Provides the time series data. `format` should be always set to `'date'`.
/* GET /api/:seriesName */
router.get('/api/:seriesName', (req, res, next) => {
  const { seriesName } = req.params
  const hasSeriesName = seriesName == 'owid-covid-data' ? data : null

  if (!hasSeriesName) {
    const message = `Could not find series name of ${seriesName}`
    next({ status: 404, message })
  }
  res.status(200).json(seriesDataExtractor(hasSeriesName))
})
module.exports = router