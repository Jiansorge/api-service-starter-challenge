const seriesDataExtractor = (data) => {

  // * `format` `<string>`
  // * `initialDataSet` `[][]` - Array of tuples
  //     * `tuple[0]` `<number>` - epoch time of data
  //     * `tuple[1]` `<number>` - data value

  const seriesDataObject = {
    format: 'date',
    initialDataSet: []
  }

  let newData = data.USA.data
  newData.map((value,i) =>{
    console.log(i, value.total_cases)
    seriesDataObject.initialDataSet.push([i],[value.total_cases])
  })

  return seriesDataObject
}

module.exports = seriesDataExtractor