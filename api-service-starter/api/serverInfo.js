const serverInfo = {
  server: {
    name :`api-service-starter`,
    apiVersion: `0.2`
  },
  availableDataSeries: { 
    seriesName:{
        name:`owid-covid-data`,
        description:`Collection of the USA COVID-19 data maintained by Our World in Data. https://github.com/owid/covid-19-data/tree/master/public/data. Output is an array of tuples. first tuple is day starting at 2019-12-31 and second is the total number of cases in US`
    }
  }
}

module.exports = serverInfo