$(document).ready(function () {
  var navbar_toggle_button = $("#navbar_toggle_button");
  var mobile_navbar = $("#mobile_navbar");
  var transactions_from_date_button = $("#transactions_from_date_button");
  var transactions_from_date_input = $("#transactions_from_date_input");

  navbar_toggle_button.on("click", function (e) {
    e.preventDefault();
    mobile_navbar.toggleClass("hidden");
  });

  transactions_from_date_button.on("click", function (e) {
    e.preventDefault();

    transactions_from_date_input.val("sdfasdfa");
  });
});
