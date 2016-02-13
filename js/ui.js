$(document).ready(function() {
  $("#add-reg-toppings").on("click", function () {
    var topping = $("#select-reg-toppings").val();
    $("table#my-pie-list").append("<tr><td class='regular'>" + topping + "</td><td>+$1.00</td><td><button type='button' class='btn btn-success btn-xs removebutton'><span class='glyphicon glyphicon-trash'></span></button></td><tr>");
  });

  $("#add-prem-toppings").on("click", function () {
    var topping = $("#select-prem-toppings").val();
    $("table#my-pie-list").append("<tr><td class='premium'>" + topping + "</td><td>+$1.50</td><td><button type='button' class='btn btn-info btn-xs removebutton'><span class='glyphicon glyphicon-trash'></span></button></td><tr>");
  });


  $("#my-pie-list").on('click', 'button.removebutton', function () {
      $(this).closest('tr').remove();
      return false;
  });

  $("#add-pizza-to-cart").click(function () {
    var name = $("#new-name").val();
    var address = $("#new-street").val();
    var zip = $("#new-zip").val();
    var pizzaSize = $("#select-pizza-size").val();
    var newPizza = new Pizza(name, address, zip, pizzaSize)

    if ( $('#delivery-radio').is(':checked') ) {
      newPizza.addDelivery();
    }

    $("#my-pie-list td").each( function() {
      if ($(this).attr("class") === "regular") {
        newPizza.addTopping($(this).text())
      }
      if ($(this).attr("class") === "premium") {
        newPizza.addPremiumTopping($(this).text())
      }
    });

    newPizza.calculateCost();
    console.log(newPizza.pizzaSize)

    $("#shopping-cart-list").append("<div class='pizza-form'" +
                                      "<h3>" + newPizza.pizzaSize + " inch pizza</h3>" +
                                      "<p>Toppings: " + newPizza.toppingsToString() + "</p>" +
                                      "<p>Price: $" + newPizza.cost.toFixed(2) + "</p>" +
                                    "</div>"
    );

    resetFields();


  });
});
