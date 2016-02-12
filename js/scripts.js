function Pizza( name, address, zip, size ) {
  this.name = name;
  this.address = address;
  this.zip = zip;
  this.size = size;
  this.toppings = [];
  this.premiumToppings = [];
  this.delivery = false;
}

  Pizza.prototype.addTopping = function ( topping ) {
    this.toppings.push( topping );
  };

  Pizza.prototype.addPremiumTopping = function ( premiumTopping ) {
    this.premiumToppings.push( premiumTopping );
  };

  Pizza.prototype.removeTopping = function ( topping ) {
    for (var i in this.toppings) {
      if(this.toppings[i]==topping) {
        this.toppings.splice(i,1);
      }
    }
    for ( var i in this.premiumToppings ) {
      if( this.premiumToppings[i] == topping ) {
        this.premiumToppings.splice( i, 1 );
      }
    }
  };

  // Pizza.prototype.addDelivery = function (first_argument) {
  //   // body...
  // };
  //
  // Pizza.prototype.calculateCost = function (first_argument) {
  //
  // };
  //
  // function ShoppingCart() {
  //   this.pizzas = [];
  // }
