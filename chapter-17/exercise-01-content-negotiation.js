// Your code here.
var req = new XMLHttpRequest();
var mediaTypes = ["text/plain", "text/html",
                  "application/json", "application/rainbows+unicorns"];
mediaTypes.forEach(function (type) {
  req.open("GET", "author", false);
  req.setRequestHeader("Accept", type);
  req.send(null);
  console.log(type +":", "\n" + req.responseText + "-----");
});
