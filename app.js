var openHours = ["6am", "7am", "8am", "9am", "10am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];
var shopArray = [];
var storeTable = document.getElementById('stores');

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
  };//close proto
};

StoreSheet.prototype.render = function () {
  var xtrElement = document.createElement('tr');
  var xtdElement = document.createElement('td');

  xtdElement.textContent = this.location; ////////////////////////////////////
  xtrElement.appendChild(xtdElement)

  for(var i = 0; i < openHours.length; i++) {
    xtdElement = document.createElement('td');
    xtdElement.textContent = this.hourlySale[i];
    xtrElement.appendChild(xtdElement);

  };

  xtdElement = document.createElement('td');
  xtdElement.textContent = this.totalSales;
  xtrElement.appendChild(xtdElement);
  storeTable.appendChild(xtrElement);
};//close proto

var pike = new StoreSheet("1st and Pike", 23, 65, 6.3);
var airport = new StoreSheet("SeaTac Airport", 3, 24, 1.2);
var center = new StoreSheet("Seattle Center", 11, 38, 3.7);
var hill = new StoreSheet("Capitol Hill", 20, 38, 2.3);
var alki = new StoreSheet("Alki", 2, 16, 4.6);


function header (){

  var xtrElement = document.createElement('tr');
  var xtdElement = document.createElement('td');

  xtdElement.textContent = 'Store Location'; ////////////////////////////////////
  xtrElement.appendChild(xtdElement);

  for ( i = 0 ; i < openHours.length ; i++ ) {
    
    xtdElement = document.createElement('td');
    xtdElement.textContent = openHours[i];
    xtrElement.appendChild(xtdElement);

  }//for close
  xtdElement = document.createElement('td');
  xtdElement.textContent = this.totalSales;
  xtrElement.appendChild(xtdElement);
  storeTable.appendChild(xtrElement);
}//function close

function footer(){

}

header ();

pike.salesPerHour();
pike.render();

airport.salesPerHour();
airport.render();

center.salesPerHour();
center.render();

hill.salesPerHour();
hill.render();

alki.salesPerHour();
alki.render();

// footer ();