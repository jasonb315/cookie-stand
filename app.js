var openHours = ["6am", "7am", "8am", "9am", "10am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

//////.....

function StoreSheet(p,p,p) {
  this.location: "1st and Pike",
  this.minCust: 23,
  this.maxCust: 65,
  this.avgSale: 6.3,
  this.totalSales: 0,
  this.salesPerHour = function(){
      
  }

  
  this.introduction = function() {
    return 'Hi, my name is what, my name is who, my name is WIKI WIKI slim ' + this.firstName + '.'
  }
};



















//////.....

var pike = {
  location: "1st and Pike",
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  totalSales: 0,

  salesPerHour: function() {
    var pike = document.getElementById('pike');
    var pikeTotal = document.getElementById('pikeTotal');
    
    for (var i = 0; i < openHours.length; i++) {

      var randMinMax = ((Math.random() * (this.maxCust - this.minCust) + this.minCust));
      var saleMinMax = randMinMax*this.avgSale;
      this.totalSales += saleMinMax
      var cph = document.createElement('li');
      cph.textContent = openHours[i] + ': ' + Math.round(saleMinMax) + '.';
      pike.appendChild(cph);

    } //close loop

    var pt = document.createElement('li');
    pt.textContent = "Total Sales: " + Math.round(this.totalSales) + '.'
    pikeTotal.appendChild(pt);
  } //close function
};//close object

pike.salesPerHour();



var airport = {
  location: "SeaTac Airport",
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  totalSales: 0,

  salesPerHour: function() {
    var airport = document.getElementById('airport');
    var airportTotal = document.getElementById('airportTotal');
    
    for (var i = 0; i < openHours.length; i++) {

      var randMinMax = ((Math.random() * (this.maxCust - this.minCust) + this.minCust));
      var saleMinMax = randMinMax*this.avgSale;
      this.totalSales += saleMinMax
      var cph = document.createElement('li');
      cph.textContent = openHours[i] + ': ' + Math.round(saleMinMax) + '.'
      airport.appendChild(cph);

    } //close loop
    var at = document.createElement('li');
    at.textContent = "Total Sales: " + Math.round(this.totalSales) + '.'
    airportTotal.appendChild(at);
  } //close function
};

airport.salesPerHour();

var center = {
  location: "Seattle Center",
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  totalSales: 0,

  salesPerHour: function() {
    var center = document.getElementById('center');
    var centerTotal = document.getElementById('centerTotal');
    
    for (var i = 0; i < openHours.length; i++) {

      var randMinMax = ((Math.random() * (this.maxCust - this.minCust) + this.minCust));
      var saleMinMax = randMinMax*this.avgSale;
      this.totalSales += saleMinMax
      var cph = document.createElement('li');
      cph.textContent = openHours[i] + ': ' + Math.round(saleMinMax) + '.'
      center.appendChild(cph);

    } //close loop
    var ct = document.createElement('li');
    ct.textContent = "Total Sales: " + Math.round(this.totalSales) + '.'
    centerTotal.appendChild(ct);
  } //close function
};
///////////////////////////////////////////////////////
center.salesPerHour();

var hill = {
  location: "Capitol Hill",
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  totalSales: 0,

  salesPerHour: function() {
    var hill = document.getElementById('hill');
    var hillTotal = document.getElementById('hillTotal');

    for (var i = 0; i < openHours.length; i++) {

      var randMinMax = ((Math.random() * (this.maxCust - this.minCust) + this.minCust));
      var saleMinMax = randMinMax*this.avgSale;
      this.totalSales += saleMinMax
      var cph = document.createElement('li');
      cph.textContent = openHours[i] + ': ' + Math.round(saleMinMax) + '.'
      hill.appendChild(cph);

    } //close loop
    var ht = document.createElement('li');
    ht.textContent = "Total Sales: " + Math.round(this.totalSales) + '.'
    hillTotal.appendChild(ht);
  } //close function
};

hill.salesPerHour();

var alki = {
  location: "Alki",
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  totalSales: 0,

  salesPerHour: function() {
    var alki = document.getElementById('alki');
    var alkiTotal = document.getElementById('alkiTotal');
    
    for (var i = 0; i < openHours.length; i++) {

      var randMinMax = ((Math.random() * (this.maxCust - this.minCust) + this.minCust));
      var saleMinMax = randMinMax*this.avgSale;
      this.totalSales += saleMinMax
      var cph = document.createElement('li');
      cph.textContent = openHours[i] + ': ' + Math.round(saleMinMax) + '.'
      alki.appendChild(cph);

    } //close loop
    var at = document.createElement('li');
    at.textContent = "Total Sales: " + Math.round(this.totalSales) + '.'
    alkiTotal.appendChild(at);
  } //close function
};

alki.salesPerHour();