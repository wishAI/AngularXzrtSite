$(document).ready ->
    metaViewport = "<meta name='viewport' content='width=711, user-scalable=no'/>"
    if(window.screen.width <= 450 || window.screen.height <= 450)
        $("head").append(metaViewport)

