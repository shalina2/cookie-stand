'use strict';

var hours = [' ','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
// var thead = document.getElementsByTagName('thead')[0];
// var tbody = document.getElementsByTagName('tbody')[0];
// var tfoot = document.getElementsByTagName('tfoot')[0];
var addForm = document.getElementById('add-location');
var salesForm = document.getElementById('sales-data');
var trEl = document.getElementById('tr');


function Store(location, min, max, avg) {
  this.locationName = location;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerSale = avg;
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  this.getSales();

  Store.allLocations.push(this);
}


Store.prototype.totalsale = function() {
  for (var i = 0; i < hours.length; i++) {
    var cookiesperhr = Math.round(this.Customers() * this.avgsale)
      this.cookiesSoldhr.push(cookiesperhr);
    }
};
    

Store.prototype.render = function() {
  var tr = document.addElement('tr');
          tr.appendchild(td);
  var td = document.addElement('td');
          td.content = this.storeName;
for (var i = 0; i < this.cookiesperhr.length; i++) {
    var td = document.createElement('td');
    td.textcontent = this.cookiesSold('td');
        tr.appendchild(td);}


        td.textcontent = 'Total cookies : ' + this.totalcookies;
        
        function header() {
          var trow = document.createElement('tr');
          var tdEl = document.createElement('td');
          tdEl.textcontent = 'Cookie Store';
          trow.appendchild(tdEl);
          for(var i =0; i< hours.length;i++) {
            tdEl = document.createElement('td');
            tdEl.textContent = businessHours[i];
            trEl.appendChild(trEl);
          }
          storeInfo.appendChild(trEl);
        }
      }

var firstpike = new store(23,65,6.3,'Firstpike');
var seaTacAirport = new Store(3, 24, 1.2, 'Sea Tac Airport');
var seattleCenter = new Store(11,38,3.7,'Seattle Center');
var capHill = new Store(20,38,2.3,'Captiol Hill');
var alki = new Store(2,16,4.6,'Alki');



function renderStores() {
  for(var i = 0; i< stores.length;i++) {
    allStores[i].getCookiesSold();
    allStores[i].render();
  }



 function NewStores(event) {

    var location =event.get.locationName;
    var minCustomersPerHour =event.get.minvalue;
    var maxCustomersPerHour =event.get.maxvalue;
    var avgCookiesPerSale =event.get.avgsale;

new Store(minCustomersPerHour,maxCustomersPerHour,avgsale,location);

store.innerHTML = '';
header();
renderstores();
 }
 storeForm.addEventListener('submit',Newstore);



