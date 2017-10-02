
document.addEventListener 'DOMContentLoaded', ->

    # get the element with c-src properties
    eles = document.getElementsByClassName('data-src-holder')

    loadSrc = (ele) ->
        ele.addEventListener 'DOMSubtreeModified', (evt) ->

            srcType = ele.getElementsByClassName('src-type')[0].innerHTML
            srcUrl = ele.getElementsByClassName('src-url')[0].innerHTML
            if srcType != '' and srcUrl != ''
                # each type of the eles
                switch srcType
                    when 'text' 
                        # ajax load text and put in the element
                        $.ajax
                            type: 'GET'
                            url: srcUrl
                            success: (data) -> ele.parentNode.insertAdjacentHTML('beforeEnd', data)
#            console.log(srcType)
#            ele.getElementsByClassName('src-type')[0].innerHTML = 'complete'

    document.addEventListener 'DOMNodeInserted', (evt) ->
        ele = evt.target
        if ele.classList
            if ele.classList.contains('contentText')
                loadSrc(evt.target)

        # find the nodes
        if ele.getElementsByClassName
            nodes = ele.getElementsByClassName('data-src-holder')
            for node in nodes
                loadSrc(node)




