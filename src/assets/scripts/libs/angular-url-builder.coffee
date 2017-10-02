
window.UrlProcessor = {
#    makeComponentUrl: (name)->
#        return XzrtConfig.COMPONENT_ROOT_PATH + name + '.component'
#
#    makeServiceUrl: (name)->
#        return XzrtConfig.SERVICE_ROOT_PATH + name + '.service'
#
#    makeModuleUrl: (name)->
#        return XzrtConfig.MODULE_ROOT_PATH + name + '.module'
#
#
#
#
#    makeTemplateUrl: (name)->
#        return XzrtConfig.TEMPLATE_ROOT_PATH + name + '.component.html'
#
#    makeStyleUrl: (name)->
#        return XzrtConfig.STYLE_ROOT_PATH + name + '.component.css'
    extendResourceUrl: (relUrl) -> XzrtConfig.BACKWARD_ROOT_URL + relUrl
}



