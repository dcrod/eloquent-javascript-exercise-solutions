<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
  // Your code here.
  for (i = 0; i < 5; i++) {
    var trailer = document.createElement("div");
    trailer.className = "trail";
    document.body.appendChild(trailer);
  }
  
 console.log(Object.keys(MouseEvent.prototype));
  
  function showTrail(event, lastEvent) {
    var trailers = document.body.getElementsByClassName("trail");
    var movedY = event.pageY - lastEvent.pageY;
    var movedX = event.pageX - lastEvent.pageX;
    console.log(movedX, movedY);
    for (i = 0; i < trailers.length; i++) {
      var trailWeight = (i+1)/trailers.length;
      trailers[i].style.top = event.pageY - trailWeight * movedY + "px";
      trailers[i].style.left = event.pageX - trailWeight * movedX + "px";
    }
  }
  
  
  var toSchedule = false;
  var lastEvent;
    
  addEventListener("mousemove", function(event) {
    //console.log((event.pageX, event.x, event.movementX, event.movementY));
    console.log(lastEvent instanceof MouseEvent);
    if (!(lastEvent instanceof MouseEvent)) {
      lastEvent = event;
      console.log(lastEvent);
    }
    
    if (toSchedule) {
      showTrail(event, lastEvent);
      lastEvent = event;
      toSchedule = false;
    } else {
      setTimeout(function() {
        toSchedule = true;
      }, 500);
    }
    
    
    
      
    
  });
  
</script>
