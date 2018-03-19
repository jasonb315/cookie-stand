var openHours = ["6am", "7am", "8am", "9am", "10am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];
var shopArray = [];
var storeTable = document.getElementById('stores');
var shopForm = document.getElementById('shopForm');

function StoreSheet(location, minCust, maxCust, avgSale) {
  this.location = location,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avgSale = avgSale,
  this.totalSales = 0,
  this.hourlySale = [];
  shopArray.push(this);
};//close constructor

StoreSheet.prototype.salesPerHour = function () {
  for (var i = 0; i < openHours.length; i++) {

    var randMinMax = ((Math.random() * (this.maxCust - this.minCust) + this.minCust));
    var saleMinMax = Math.floor(randMinMax*this.avgSale);
    this.totalSales += saleMinMax;
    this.hourlySale.push(saleMinMax);
  };//close loop
};//close sales calc proto

StoreSheet.prototype.render = function () {
  var xtrElement = document.createElement('tr');
  var xtdElement = document.createElement('td');

  xtdElement.textContent = this.location;
  xtrElement.appendChild(xtdElement);

  for(var i = 0; i < openHours.length; i++) {
    xtdElement = document.createElement('td');
    xtdElement.textContent = this.hourlySale[i];
    xtrElement.appendChild(xtdElement);

  };
  xtdElement = document.createElement('td');
  xtdElement.textContent = this.totalSales;
  xtrElement.appendChild(xtdElement);

  storeTable.appendChild(xtrElement);
};//close render proto

new StoreSheet("1st and Pike", 23, 65, 6.3);

new StoreSheet("SeaTac Airport", 3, 24, 1.2);

new StoreSheet("Seattle Center", 11, 38, 3.7);

new StoreSheet("Capitol Hill", 20, 38, 2.3);

new StoreSheet("Alki", 2, 16, 4.6);

function header (){

  var xtrElement = document.createElement('tr');
  var xtdElement = document.createElement('th');
  xtdElement.textContent = 'Store Location';
  xtrElement.appendChild(xtdElement);

  for ( i = 0 ; i < openHours.length ; i++ ) {
    xtdElement = document.createElement('th');
    xtdElement.textContent = openHours[i];
    xtrElement.appendChild(xtdElement);

  }//for close

  xtdElement = document.createElement('th');
  xtdElement.textContent = 'Local Total';
  xtrElement.appendChild(xtdElement);
  storeTable.appendChild(xtrElement);

}//function close

function renderAllShops() {
  for (var i in shopArray){
    shopArray[i].render();
  }//close loop
}//close function

function salesAllStores(){
  for (var i in shopArray){
    shopArray[i].salesPerHour();
  }
}

function footer(){

  var xtrElement = document.createElement('tr');
  var xtdElement = document.createElement('td');

  xtdElement.textContent = 'Sum Totals';
  xtrElement.appendChild(xtdElement);

  var totalTotal = 0;

  for ( j = 0 ; j < openHours.length ; j++ ) {

    var hourTotal = 0;

    for( i = 0 ; i < shopArray.length ; i++ ) {

        hourTotal += shopArray[i].hourlySale[j]

    }//end inner for

      totalTotal += hourTotal;
      xtdElement = document.createElement('td');
      xtdElement.textContent = hourTotal;
      xtrElement.appendChild(xtdElement);

  }//end outer for

    xtdElement = document.createElement('td');
    xtdElement.textContent = totalTotal;
    xtrElement.appendChild(xtdElement);

  storeTable.appendChild(xtrElement);
}

function addNewShop(event) {

  event.preventDefault();

  var storeLocation = event.target.label1.value; //one each for field to be moved into
  var minCust = event.target.label2.value;
  var maxCust = event.target.label3.value;
  var avgSale = event.target.label4.value;

  new StoreSheet(storeLocation, minCust, maxCust, avgSale);

  storeTable.innerHTML = '';
  header();
  salesAllStores();
  renderAllShops();
  footer();

}//close add new shop event

shopForm.addEventListener('submit', addNewShop);
debugger;
Node;
header();
salesAllStores();
renderAllShops();
footer();