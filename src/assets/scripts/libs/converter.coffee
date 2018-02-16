window.timeStampToDateStr = (stamp) ->
    # convert stamp to date
    date = new Date(stamp)

    # get year, month and hour
    year = date.getFullYear()
    month = date.getMonth()
    day = date.getDate()

    month + '/' + day + " " + year;

window.paramsToRequestOptions = (params) ->
    urlSearchParams = new URLSearchParams()

    for key of params
        urlSearchParams.set(key, params[key])

    urlSearchParams

window.relUrlToBackAbsUrl = (url) -> XzrtConfig.BACKWARD_ROOT_URL + url

window.urlToQuery = (url) ->
    search = url.split('?')[1]
    JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
