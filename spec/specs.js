describe('Pizza', function() {
  it("will be created with the given properties", function() {
    var testPizza = new Pizza("Christopher", "1618 N Killingsworth", "97217", "12-inch");
    expect(testPizza.name).to.equal("Christopher");
    expect(testPizza.address).to.equal("1618 N Killingsworth");
    expect(testPizza.zip).to.equal("97217");
    expect(testPizza.size).to.equal("12-inch");
    expect(testPizza.toppings).to.be.empty;
    expect(testPizza.premiumToppings).to.be.empty;
    expect(testPizza.delivery).to.be.false;
  });

  it("will add regular and premium toppings to the pizza", function() {
    var testPizza = new Pizza("Christopher", "1618 N Killingsworth", "97217", "12-inch");
    testPizza.addTopping("pepperoni");
    testPizza.addPremiumTopping("anchovies");
    expect(testPizza.toppings.length).to.equal(1);
    expect(testPizza.premiumToppings.length).to.equal(1);
  });
});
