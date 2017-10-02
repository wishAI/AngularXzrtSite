// Generated by CoffeeScript 1.12.2
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var eles, loadSrc;
    eles = document.getElementsByClassName('data-src-holder');
    loadSrc = function(ele) {
      return ele.addEventListener('DOMSubtreeModified', function(evt) {
        var srcType, srcUrl;
        srcType = ele.getElementsByClassName('src-type')[0].innerHTML;
        srcUrl = ele.getElementsByClassName('src-url')[0].innerHTML;
        if (srcType !== '' && srcUrl !== '') {
          switch (srcType) {
            case 'text':
              return $.ajax({
                type: 'GET',
                url: srcUrl,
                success: function(data) {
                  return ele.parentNode.insertAdjacentHTML('beforeEnd', data);
                }
              });
          }
        }
      });
    };
    return document.addEventListener('DOMNodeInserted', function(evt) {
      var ele, i, len, node, nodes, results;
      ele = evt.target;
      if (ele.classList) {
        if (ele.classList.contains('contentText')) {
          loadSrc(evt.target);
        }
      }
      if (ele.getElementsByClassName) {
        nodes = ele.getElementsByClassName('data-src-holder');
        results = [];
        for (i = 0, len = nodes.length; i < len; i++) {
          node = nodes[i];
          results.push(loadSrc(node));
        }
        return results;
      }
    });
  });

}).call(this);

//# sourceMappingURL=data-src-loader.js.map
