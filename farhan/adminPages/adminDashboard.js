window.onload = function () {
  console.log("window loaded!");
  var exportBtn = document.getElementById("exportBtn");
  exportBtn.addEventListener("click", exportData);
};

function exportData() {
  var table = document.getElementById("statusTable");
  console.log(table);
  /* Declaring array variable */
  var rows = [];

  //iterate through rows of table
  for (var i = 0, row; (row = table.rows[i]); i++) {
    //rows would be accessed using the "row" variable assigned in the for loop
    //Get each cell value/column from the row
    var col = [];
    for(var j = 0; j < 5; j++){
      col.push(row.cells[j].innerText);
    }
    /* add a new records in the array */
    rows.push(col);
  }
  csvContent = "data:text/csv;charset=utf-8,";
  /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
  rows.forEach(function (rowArray) {
    row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  /* create a hidden <a> DOM node and set its download attribute */
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "Report.csv");
  document.body.appendChild(link);
  /* download the data file named "Stock_Price_Report.csv" */
  link.click();
}

//filter
var TypeofNeed = document.getElementById("TypeofNeed");
TypeofNeed.style.display = "none";

var filterSelect = document.getElementById("filterSelect");

filterSelect.addEventListener("change", () => {
  let selectedOption = filterSelect.options[filterSelect.selectedIndex].value;
  console.log(selectedOption);

  switch (selectedOption) {
    case "TypeofNeed":
      TypeofNeed.style.display = "block";
      break;
    default:
      TypeofNeed.style.display = "none";
      break;
  }
});


