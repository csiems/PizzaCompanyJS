$(document).ready(function() {
  $("#add-toppings").on("click", function () {
    var topping = $("#select-reg-toppings").val();

    $("ul#my-pie-list").append("<li class='regular'>" + topping + "</li>")

  });

  $("#add-prem-toppings").on("click", function () {
    var topping = $("#select-prem-toppings").val();
    $("ul#my-pie-list").append("<li class='premium'>" + topping + "</li>")
  });

  $("#add-pizza-to-cart").on("click", function () {
    var name = $("#new-name").val();
    var address = $("#new-street").val();
    var zip = $("#new-zip").val();
    var pizzaSize = $("#select-pizza-size").val();
    var newPizza = new Pizza(name, address, zip, pizzaSize)

    if ( $('#delivery-radio').is(':checked') ) {
      newPizza.delivery = true;
    }

    $("#my-pie-list li").each( function() {
      if ($(this).attr("class") === "regular") {
        newPizza.toppings.push($(this).text())
      }
      if ($(this).attr("class") === "premium") {
        newPizza.premiumToppings.push($(this).text())
      }
    });

    newPizza.calculateCost();

    $("#shopping-cart-list").append("<h3>" + newPizza.pizzaSize + " inch pizza</h3>" +
                                    "<p>" + newPizza.toppingsToString() + "</p>" +
                                    "<p>Price: $" + newPizza.cost.toFixed(2) + "</p>"
    );

    //TODO: reset fields after appending

  });
});
