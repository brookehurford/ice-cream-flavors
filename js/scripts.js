$(document).ready(function() {
    var flavors = ["cookie dough","mint","chocolate chip", "strawberry"]

    flavors.forEach(function(flavor) {
      $("#flavors").append("<li>" + flavor + "</li>")
    });
});
