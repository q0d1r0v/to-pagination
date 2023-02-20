**Install package**

`npm i to-pagination`

**Use package**

```
// imports
const toPagination = require('to-pagination') or import toPagination from 'to-pagination'

// data
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const pagination = toPagination(arr, 1, 10) // result { perPage: 1, maxDataLength: 10, maxPage: 2, firstIndex: 0, data: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] }

// toPagination(arr, perPage, maxDataLength)
```
# to-pagination
