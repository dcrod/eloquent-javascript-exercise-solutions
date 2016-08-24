<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<script>
  function buildTable(data) {
    var table = document.createElement("table");
    var columns = Object.keys(data[0]);
    table.appendChild(document.createElement("tr"));
    columns.forEach(function(column) {
      var header = document.createElement("th");
      header.textContent = column;
      if (typeof data[0][column] == "number") {
        header.style.textAlign = "right";
      }
      table.firstChild.appendChild(header);
    });
    data.forEach(function(item) {
      var rowData = columns.map(function(_, colIndex) {
        return item[columns[colIndex]];
      });
      var row = document.createElement("tr");
      rowData.forEach(function(cellData) {
        var cell = document.createElement("td");
        if (typeof cellData == "number") {
          cell.textContent = String(cellData);
          cell.style.textAlign = "right";
        } else {
          cell.textContent = cellData;
        }
        row.appendChild(cell);
      });
      table.appendChild(row);
    });
    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>
