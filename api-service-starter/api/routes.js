const router = require('express').Router()
const data = require('../src/owid-covid-data.json')
const serverInfo = require('./serverInfo')

/* GET / */
router.get('/',   (req, res, next) => {
  res.status(200)
  res.json(serverInfo)
  }  
)

// * `format` `<string>`
// * `initialDataSet` `[][]` - Array of tuples
//     * `tuple[0]` `<number>` - epoch time of data
//     * `tuple[1]` `<number>` - data value

// Provides the time series data. `format` should be always set to `'date'`.

/* GET /api/:seriesName */
router.get('/api/:seriesName', (req, res, next) => {
  const { data } = data
  const { seriesName } = req.params
  const hasSeries = data.find(el => el.seriesName === seriesName)

  if (!hasSeriesName) {
    const message = `Could not find series name of ${hasSeriesName}`
    next({ status: 404, message })
  }
  res.status(200).json(hasSeriesName)
})
module.exports = router