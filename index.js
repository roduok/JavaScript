// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $searchBtn = document.querySelector("#search");
var $cityInput = document.querySelector("#city");
var $searchBtn2 = document.querySelector("#search2");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn3 = document.querySelector("#search3");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
$searchBtn2.addEventListener("click", handleSearchButtonClick2);
$searchBtn3.addEventListener("click", handleSearchButtonClick2);
// Set filteredAddresses to addressData initially
var filteredData = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current address object and its fields
    var ufoEntry = filteredData[i];
    var fields = Object.keys(ufoEntry);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufoEntry[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = $dateInput.value.trim().toLowerCase();
  var filterCity = $cityInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredData = dataSet.filter(function(ufoEntry) {
    var dataTime = ufoEntry.datetime.toLowerCase();
    var dataCity = ufoEntry.city.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    if (dataTime === filterDate) {if (dataCity === filterCity) {
    return dataCity === filterCity && dataTime}}; 
  });

  renderTable();
}
function handleSearchButtonClick2() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredData = dataSet.filter(function(ufoEntry) {
   
    var dataState = ufoEntry.state.toLowerCase();
    var dataCountry = ufoEntry.country.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    if (dataState === filterState) { if (dataCountry === filterCountry) {
      return dataCountry === filterCountry && dataState
    }};
    
  });
  
  renderTable();
}
function handleSearchButtonClick2() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterShape = $shapeInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredData = dataSet.filter(function(ufoEntry) {
   
    var dataShape = ufoEntry.shape.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    
    return dataShape === filterShape;
    
  });
  
  renderTable();
}
// Render the table for the first time on page load
renderTable();