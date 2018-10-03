'use strict';
var Storelocations =[];
var hours = ['','6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var storeTable = document.getElementById('store');
var thead =document.getElementsByTagName('thead')[0];
var tfoot =document.getElementsByTagName('tfoot')[0];
var tbody =document.getElementsByTagName('tbody')[0];

function Store(location,minCustomer,maxCustomer,avgCookieSales) {
    this.locationName = location;
    this.minCustomerPerhour = minCustomer;
    this.maxCustomerPerhour =maxCustomer;
    this.avgCookieSales =avgCookieSales;
    this.hourlySales =[];
    this.totalSales =0;
    this.getsales();
    Store.location.push(this);
}


    function random(){
       var randomNumber = Math.floor(Math.random() * (maxCustomer- minCustomer +1 )) + minCustomer;
        return randomNumber;
    }
    Store.prototype.getsales=function(){
        for(var i = 0; i < hours.length; i++){
            var Customers =random(
                this.minCustomerPerhr,
                this.maxCustomerPerhr,
            );
            var hourlycount = Math.floor(Customers * this.avgCookieSales);
            this.cookiesperhr.push(this.avgCookieSales);
        }
    };
    Store.prototype.render = function() {
        var trelement = document.createElement('tr');
        var tdelement =document.createElement('td');

        tdelement.textContent =this.location;
        trelement.appendChild(tdelement);

        var tdelement =document.createElement('td');
        tdelement.textContent =this.minCustomer;
        trelement.appendChild(tdelement);

        var tdelement =document.createElement('td');
        tdelement.textContent =this.maxCustomer;
        trelement.appendChild(tdelement);

        var tdelement =document.createElement('td');
        tdelement.textContent =this.avgCookieSales;
        trelement.appendChild(tdelement);


        storeTable.appendChild(trelement);

    };

            new Store('firstNpike',22,65,6.3);
            new Store('Seatac', 3, 24, 1.2);
            new Store('Seattle Center', 11, 38, 3.7);
            new Store('Capitol Hill', 20, 38, 2.3);
            new Store('Alki', 2, 16, 4.6);


            function Headerow(){
               var headerTrElement = document.createElement('tr');
                var thElement = document.createElement('th');
                thElement.textContent =hours;
                headerTrElement.appendChild(thElement);
                }




    function renderStores() {
        for(var i of allstores) {
            i.render();

        }
    }

    function newStore(event) {
        var newlocation =event.target.location.value;
        var minCustomer =event.target.minCustomer.value;
        var maxCustomer =event.maxCustomer.value;
        var avgCookieSales =event.avgCookieSales.value;

        new store(newlocation,newmincustomer,newmaxcustomer,newavgsales);
        storeTable.innerHTML='';
        Headerow();
        renderStores();
    }
    


    function renderFooter() {
        tfoot.innerHTML = '';
        var tr = addElement('tr','',tfoot);
        addElement('th','hourlytotal',tr);
    }
     

        
    

     function handle(event) {
         var location =event.target.location.value;
         var min =ParseInt(event.target.min);
         var max =ParseInt(event.target.max);
         var avg =ParseInt(event.target.avg);

         var newStore =new(location,min,max,avg);

         newStore.render();
     }
        addform.addEventlistener('submit',handleSubmit);
        
            new store('firstNpike',22,65,6.3);
            new Store('Seatac', 3, 24, 1.2);
            new Store('Seattle Center', 11, 38, 3.7);
            new Store('Capitol Hill', 20, 38, 2.3);
            new Store('Alki', 2, 16, 4.6);

            renderHeader();
            renderStores();
            renderFooter();
console.log(Storelocations);