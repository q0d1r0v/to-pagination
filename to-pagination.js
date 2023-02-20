// to pagination
function toPagination(arr, perPage, maxDataLength) {
    if (arr.length > 0 && perPage && maxDataLength) {
        // page data
        let pageData = {}

        // set data
        pageData.perPage = perPage
        pageData.maxDataLength = maxDataLength
        pageData.maxPage = Math.ceil(arr.length / maxDataLength)

        // set first index
        if(perPage == 1) {
            pageData.firstIndex = 0
        } else {
            let fIndex = (perPage * maxDataLength) - maxDataLength
            if(fIndex < arr.length) {
                pageData.firstIndex = (perPage * maxDataLength) - maxDataLength
            } else {
                pageData.firstIndex = 0
            }
        }

        // set paginate data
        pageData.data = arr.splice(pageData.firstIndex, maxDataLength)

        return pageData
    } else {
        return "Don't have all params data"
    }
}

module.exports = toPagination