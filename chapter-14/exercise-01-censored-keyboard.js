<input type="text">
<script>
  var field = document.querySelector("input");
  // Your code here.
  field.addEventListener("keypress", function(event) {
    if ((String.fromCharCode(event.charCode)).match(/[QWX]/i)) {
      event.preventDefault();
    }
  });
</script>
