const seriesDataExtractor = (data) => {

  // * `format` `<string>`
  // * `initialDataSet` `[][]` - Array of tuples
  //     * `tuple[0]` `<number>` - epoch time of data
  //     * `tuple[1]` `<number>` - data value

  const seriesDataObject = {
    format: 'date',
    initialDataSet: []
  }

  let epoch
  let newData = data.USA.data
  newData.map((value,i) =>{
    epoch = new Date(value.date)
    seriesDataObject.initialDataSet.push([epoch.getTime(),value.total_cases])
  })

  return seriesDataObject
}

module.exports = seriesDataExtractor