describe('Pizza', function() {
  it("will be created with the given properties", function() {
    var testPizza = new Pizza("Christopher", "1618 N Killingsworth", "97217", 12);
    expect(testPizza.name).to.equal("Christopher");
    expect(testPizza.address).to.equal("1618 N Killingsworth");
    expect(testPizza.zip).to.equal("97217");
    expect(testPizza.pizzaSize).to.equal(12);
    expect(testPizza.toppings).to.be.empty;
    expect(testPizza.premiumToppings).to.be.empty;
    expect(testPizza.delivery).to.be.false;
  });

  it("will add regular and premium toppings to the pizza", function() {
    var testPizza = new Pizza("Christopher", "1618 N Killingsworth", "97217", 12);
    testPizza.addTopping("pepperoni");
    testPizza.addPremiumTopping("anchovies");
    expect(testPizza.toppings.length).to.equal(1);
    expect(testPizza.premiumToppings.length).to.equal(1);
  });

  it("will remove regular and premium toppings from the pizza", function() {
    var testPizza = new Pizza("Christopher", "1618 N Killingsworth", "97217", 12);
    testPizza.addTopping("pepperoni");
    testPizza.addPremiumTopping("anchovies");
    testPizza.removeTopping("pepperoni");
    testPizza.removeTopping("anchovies");
    expect(testPizza.toppings).to.be.empty;
    expect(testPizza.premiumToppings).to.be.empty;
  });

  it("will mark pizza for delivery", function() {
    var testPizza = new Pizza("Christopher", "1618 N Killingsworth", "97217", 12);
    testPizza.addDelivery();
    expect(testPizza.delivery).to.be.true;
  });

  it("will calculate the cost of pizza", function() {
    var testPizza = new Pizza("Christopher", "1618 N Killingsworth", "97217", 12);
    testPizza.addTopping("pepperoni");
    testPizza.addTopping("green peppers");
    testPizza.addPremiumTopping("anchovies");
    testPizza.addDelivery();
    testPizza.calculateCost();
    var otherTestPizza = new Pizza("Christopher", "1618 N Killingsworth", "97217", 16);
    otherTestPizza.addTopping("pepperoni");
    otherTestPizza.calculateCost();
    expect(otherTestPizza.cost).to.equal(12) ;
  });
});

describe('ShoppingCart', function() {
  it("will be created with the given array variable", function() {
    var testShoppingCart = new ShoppingCart();
    expect(testShoppingCart.pizzas.length).to.equal(0);
  });
});
