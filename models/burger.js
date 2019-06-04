$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(), enjoyed: 0
        };

        $.ajax("/api/burger.js", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Add a burger");
            location.reload();
        });
    });
    $(".eatburger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var enjoyedAt = {
            enjoyed: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "put",
            data: "enjoyedAt",
        }).then(function () {
            console.log("Burger Enjoyed");
            location.reload();
        });
    });

});