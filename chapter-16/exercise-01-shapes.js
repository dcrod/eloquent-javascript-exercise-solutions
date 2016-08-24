<canvas width="600" height="200"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");

  // Your code here.
  
  function drawTrapezoid(context, x, y, topWidth, bottomWidth, height) {
    var x = Math.max(x, (bottomWidth - topWidth) / 2);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + topWidth, y);
    context.lineTo(x + topWidth + (bottomWidth - topWidth)/2, y + height);
    context.lineTo(x - (bottomWidth - topWidth)/2, y + height);
    context.lineTo(x, y);
    context.stroke();
  }
  
  function drawDiamond(context, x, y, sideLength, color) {
    var diagonal = Math.sqrt(2 * sideLength * sideLength);
    var x = Math.max(x, diagonal / 2);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + diagonal / 2, y + diagonal / 2);
    context.lineTo(x, y + diagonal);
    context.lineTo(x - diagonal / 2, y + diagonal / 2);
    context.fillStyle = color ? color : "red";
    context.fill();
  }
  
  function drawZigZags(context, x, y, width, height, lineCount) {
    context.save();
    context.translate(x, y);
    context.beginPath();
    context.moveTo(0, 0); 
    for (var i = 1; i <= lineCount; i++) {
      context.lineTo((i % 2) * width,
                     i * (height / lineCount));
    }
    context.stroke();
    context.restore();
  }

  function drawSpiral(context, x, y) {
    context.save();
    context.translate(x, y);
    context.beginPath();
    context.moveTo(2, 1);
    var segment = 15;
    var radius = 5;
    var angle = Math.PI / 4;
    for (var i = 1; i <= 100; i++, radius = 3 + 13 * angle / (2*Math.PI)) {
      context.lineTo(radius * Math.cos(angle),
                     radius * Math.sin(angle));
      angle += (Math.min(segment, radius*.75)) / (Math.PI * radius);
    }
    context.stroke();
    context.restore();
  }
  
  function drawStar(context, x, y, radius, color) {
    context.save();
    context.translate(x,y);
    context.beginPath();
    context.moveTo(radius, 0);
    for (var i = 1; i <= 8; i++) {
      context.quadraticCurveTo(0,0,
                               radius * Math.cos((i / 4) * Math.PI),
                               radius * Math.sin((i / 4) * Math.PI));
    }
    context.fillStyle = color ? color : "orange";
    context.fill();
    context.restore();
  }
  
  drawTrapezoid(cx, 30, 50, 50, 100, 50);
  drawDiamond(cx, 150, 30, 50);
  drawZigZags(cx, 200, 20, 75, 100, 16);
  drawSpiral(cx, 320, 60);
  drawStar(cx, 500, 70, 70);
  
  
  
  
</script>
