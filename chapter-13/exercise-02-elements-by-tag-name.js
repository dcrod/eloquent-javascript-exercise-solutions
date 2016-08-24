<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
/*
  function byTagName(node, tagName) {
    // Your code here.
    var results = [];
    var children = Array.prototype.slice.call(node.childNodes, 0);
    children.forEach(function (child) {
      if (child.tagName == tagName.toUpperCase())
        results.push(child);
      byTagName(child, tagName).forEach(function(ch) {
        results.push(ch);
      });
    });
    return results;
  }
*/

  function byTagName(node, tagName) {
    // Your code here.     
    var results = [];
    (function evalChildren(node, tagName) {
      var children = Array.prototype.forEach.call(node.childNodes, function(child) {
        if (child.nodeType == 1) {
          if (child.tagName == tagName.toUpperCase())
            results.push(child);
          evalChildren(child, tagName);
        }        
      });
    })(node, tagName);
//    evalChildren(node, tagName);
    return results;
  }
  
  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>
