<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>
<script>
  function asTabs(node) {
    // Your code here.
    var tabs = Array.prototype.filter.call(node.childNodes, function(child) {
      return child.nodeType == document.ELEMENT_NODE &&
        child.getAttribute("data-tabname"); 
    });
    var buttonWrapper = document.createElement("div");
    buttonWrapper.style.display = "inline";
    buttonWrapper.className = "buttonwrapper";
    for (i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
      var button = document.createElement("button");
      var tabName = tabs[i].getAttribute("data-tabname");
      button.setAttribute("data-targettab", tabName);
      button.textContent = tabName;
      button.addEventListener("click", toggleTabs);
      buttonWrapper.appendChild(button);
    }
    node.insertBefore(buttonWrapper, tabs[0]);
    tabs[0].style.display = "block";
    buttonWrapper.firstChild.setAttribute("disabled", "true");;
    
    function toggleTabs(event) {
      var buttons = buttonWrapper.getElementsByTagName("button");
      for (i = 0; i < buttons.length; i++) {
        buttons[i].removeAttribute("disabled");
      }
      tabs.forEach(function(tab) {
        if (tab.getAttribute("data-tabname") == 
            event.target.getAttribute("data-targettab")) {
          event.target.setAttribute("disabled", "true");
          tab.style.display = "block";
        }
        else {
          tab.style.display = "none";
        }
      });
    }  
  }
  asTabs(document.querySelector("#wrapper"));
</script>
