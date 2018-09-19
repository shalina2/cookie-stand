'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var store = ['FirstandPike','SeaTacAirport','SeattleCenter','CapitolHill','Alki'];

var firstAndPike = {
    
    minCustomer: 23,
    maxCustomer:65,
    avgCookieSales: 6.3,
    hourlySales :[],
    totalSales: 0,

    randomNum :function(){
       return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer +1 ) + this.minCustomer);
    },
    avgNumCookies : function(){
        for(var i = 0; i < hours.length; i++){
            this.hourlySales.push(Math.floor(this.avgCookieSales * this.randomNum()));
        }
    },
    addSales: function() {
        for(var i = 0; i < this.hourlySales.length; i++){
            this.totalSales+= this.hourlySales[i];
        }
    },
    render: function(){
        this.avgNumCookies();
        this.addSales();

        for(var i = 0; i < hours.length; i++) {
            var newLi = document.createElement('li');
            var displaySales = document.createTextNode(hours[i] + ': ' + this.hourlySales[i] + ' cookies ');
            newLi.appendChild(displaySales);
            var positon = document.getElementById('first-pike');
            positon.appendChild(newLi);
        }
    }
     
};

firstAndPike.render();
    

 var SeaTacAirport ={
    minCustomer : 3,
     maxCustomer : 24,
     avgCookieSales : 1.2,
     hourlySales :[],
     

     randomNum :function(min,max){
            return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer +1 ) + this.minCustomer);
         },
         avgNumCookies : function(){
            for(var i = 0; i < hours.length; i++){
                this.hourlySales.push(Math.floor(this.avgCookieSales * this.randomNum()));
            }
        },
        addSales: function() {
            for(var i = 0; i < this.hourlySales.length; i++){
                this.totalSales+= this.hourlySales[i];
            }
        },
        render: function(){
            this.avgNumCookies();
            this.addSales();
    
            for(var i = 0; i < hours.length; i++) {
                var newLi = document.createElement('li');
                var displaySales = document.createTextNode(hours[i] + ': ' + this.hourlySales[i] + ' cookies ');
                newLi.appendChild(displaySales);
                var positon = document.getElementById('seatac-airport');
                positon.appendChild(newLi);
            }
        }
         
    };
    
SeaTacAirport.render();


var seattleCenter = {
     minCustomer:11,
     maxCustomer :38,
     avgCookieSales :3.7,
     hourlySales :[],
     
     randomNum :function(min,max){
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer +1 ) + this.minCustomer);},

     avgNumCookies : function(){
     for(var i = 0; i < hours.length; i++){
        this.hourlySales.push(Math.floor(this.avgCookieSales * this.randomNum()));
    }
},
      addSales: function() {
     for(var i = 0; i < this.hourlySales.length; i++){
        this.totalSales+= this.hourlySales[i];
    }
},
     render: function(){
     this.avgNumCookies();
     this.addSales();

    for(var i = 0; i < hours.length; i++) {
        var newLi = document.createElement('li');
        var displaySales = document.createTextNode(hours[i] + ': ' + this.hourlySales[i] + ' cookies ');
        newLi.appendChild(displaySales);
        var positon = document.getElementById('Seattle-Center');
        positon.appendChild(newLi);
    }
}
 
};

 seattleCenter.render();


  var CapitolHill = {
    minCustomer: 20,
    maxCustomer: 38,
    avgCookieSales: 2.3,
    hourlySales :[],
    

    randomNum :function(){
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer +1 ) + this.minCustomer);
     },
     avgNumCookies : function(){
         for(var i = 0; i < hours.length; i++){
             this.hourlySales.push(Math.floor(this.avgCookieSales * this.randomNum()));
         }
     },
     addSales: function() {
         for(var i = 0; i < this.hourlySales.length; i++){
             this.totalSales+= this.hourlySales[i];
         }
     },
     render: function(){
         this.avgNumCookies();
         this.addSales();
 
         for(var i = 0; i < hours.length; i++) {
             var newLi = document.createElement('li');
             var displaySales = document.createTextNode(hours[i] + ': ' + this.hourlySales[i] + ' cookies ');
             newLi.appendChild(displaySales);
             var positon = document.getElementById('capitol-Hill');
             positon.appendChild(newLi);
         }
     }
      
 };
  CapitolHill.render();
 


  var Alki = {
    minCustomer : 2,
    maxCustomer : 16,
    avgCookieSales :4.6,
    hourlySales :[],


    randomNum :function(min,max){
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer +1 ) + this.minCustomer);},

        avgNumCookies : function(){
            for(var i = 0; i < hours.length; i++){
                this.hourlySales.push(Math.floor(this.avgCookieSales * this.randomNum()));
            }
        },
        addSales: function() {
            for(var i = 0; i < this.hourlySales.length; i++){
                this.totalSales+= this.hourlySales[i];
            }
        },
        render: function(){
            this.avgNumCookies();
            this.addSales();
    
            for(var i = 0; i < hours.length; i++) {
                var newLi = document.createElement('li');
                var displaySales = document.createTextNode(hours[i] + ': ' + this.hourlySales[i] + ' cookies ');
                newLi.appendChild(displaySales);
                var positon = document.getElementById('Alki');
                positon.appendChild(newLi);
            }
        }
         
    };
    Alki.render();


   




