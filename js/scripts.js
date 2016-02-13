function Pizza( name, address, zip, pizzaSize ) {
  this.name = name;
  this.address = address;
  this.zip = zip;
  this.pizzaSize = pizzaSize;
  this.toppings = [];
  this.premiumToppings = [];
  this.delivery = false;
  this.cost = 0;
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

  Pizza.prototype.addDelivery = function () {
    this.delivery = !this.delivery;
  };

  Pizza.prototype.calculateCost = function () {
    this.cost += this.pizzaSize - 4;
    this.cost += this.toppings.length - 1;
    this.cost += this.premiumToppings.length * 1.5;
    if ( this.delivery ) {
      this.cost += 3;
    }
  };

  Pizza.prototype.toppingsToString = function() {
    var toppingsAsString = "";
    for (var i in this.toppings) {
      toppingsAsString += this.toppings[i] + ", ";
    }
    for (var i in this.premiumToppings) {
      toppingsAsString += this.premiumToppings[i] + ", ";
    }

    toppingsAsString = toppingsAsString.substr(0, toppingsAsString.length - 2);
    return toppingsAsString;
  }

  function resetFields() {
    $("input#new-name").val("");
    $("input#new-street").val("");
    $("input#zip").val("");
    $("input.new-state").val("");
    $("table#my-pie-list").empty();
    $("table#my-pie-list").append("<tr><td class='premium'>Cheese</td><td><button type='button' class='btn btn-info btn-xs' id='Remove-Cheese'><span class='glyphicon glyphicon-trash'></span></button></td><tr>");
}
