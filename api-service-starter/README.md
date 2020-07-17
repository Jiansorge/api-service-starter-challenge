# App Service Starter Challenge

By [Jian Sorge](https://www.jiansorge.com)

## Installation Instructions

1. Clone locally using `git clone https://github.com/Jiansorge/api-service-starter-challenge.git`
1. `cd api-service-starter && npm init -y` to open new directory and install node modules
1. Start server using `npm start`

## Discussion of Technologies Used

The technologies I used to build this app are:

* ReactJS
* Node.js
* Express

package.json content:
 devDependencies |dependencies
:------:|:------:
 jest | express
 morgan |
 nodemon |
 supertest |

## Requirements

### 1. Server Info

> `GET /`
Returns

* `server` `<Object>`
  * `name` `<string>`
  * `apiVersion` `<string>`
* `availableDataSeries` `<Object>`
  * `seriesName` `<Object>`
    * `name` `<string>`
    * `description` `<string>`

The root URL returns information on the microservice that can be used for future queries. `apiVersion` should be set to `0.2`

### 2. Time Series Resources

> `GET /api/:seriesName`

Returns

* `format` `<string>` //'date'
* `initialDataSet` `[][]` - Array of tuples
  * `tuple[0]` `<number>` - epoch time of data
  * `tuple[1]` `<number>` - data value

Provides the time series data. `format` should be always set to `'date'`.

## Tests

Tested with Postman. Attempted to integrate Jest

## For algorithms and data structures, time and space complexity
