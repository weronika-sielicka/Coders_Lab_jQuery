$(function() {
    var ul = $(".repertuar");
    var url = "http://localhost:3000/movies";
    var form = $("form");

    function insertData(data) {
        var dataLength = data.length;
        for (var i=0; i<dataLength; i++) {
            var li = $("<li>");
            var span = $("<span>").text(data[i].description);
            var h3 = $("<h3>").text(data[i].title);
            var delBtn = $("<button>",
                {"data-id": data[i].id, "class": "delBtn"})
                .text("Usuń");
            var editBtn = $("<button>",
                {"data-id": data[i].id, "class": "editBtn"})
                .text("Edytuj");
            li.append(h3);
            li.append(span);
            li.append(delBtn);
            li.append(editBtn);
            ul.append(li);
        }
    }

    function addMovie(movie) {
        var li = $("<li>");
        var span = $("<span>").text(movie.description);
        var h3 = $("<h3>").text(movie.title);
        var delBtn = $("<button>",
            {"data-id": movie.id, "class": "delBtn"})
            .text("Usuń");
        var editBtn = $("<button>",
            {"data-id": movie.id, "class": "editBtn"})
            .text("Edytuj");
        li.append(h3);
        li.append(span);
        li.append(delBtn);
        li.append(editBtn)
        ul.append(li);
    }

    $.ajax({
        url: url,
        dataType: "JSON"
    }).done(function(response){
        insertData(response);
    });

    form.on("submit", function(event) {
        event.preventDefault();
        var titleVal = $(".get_title").val();
        var descVal = $(".get_description").val();
        $.ajax({
            url: url,
            type: "POST",
            data: {
                title: titleVal,
                description: descVal
            },
            dataType: "JSON"
        }).done(function(response){
            addMovie(response);
        });
    });

    ul.on("click", ".delBtn", function() {
        var ths = $(this);
        if (confirm("Czy chcesz na pewno usunać ten film?")) {
            $.ajax({
                url: url + "/" + ths.data('id'),
                type: "DELETE",
                dataType: "JSON"
            }).done(function() {
                ths.parent().remove();
            });
        }

    });

    ul.on("click", ".editBtn", function() {
        var ths = $(this);
        var thsText = ths.text();
        var parent = ths.parent();
        var siblingH3 = parent.find("h3");
        var siblingSpan = parent.find("span");

        if (thsText === "Edytuj") {
            ths.text("Zatwierdź");
            siblingH3.attr("contenteditable", "true");
            siblingSpan.attr("contenteditable", "true");
        } else {
            $.ajax({
                url: url + "/" + ths.data('id'),
                type: "PUT",
                data: {
                    title: siblingH3.text(),
                    description: siblingSpan.text()
                },
                dataType: "JSON"
            }).done(function() {
                ths.text("Edytuj");
                siblingH3.removeAttr("contenteditable");
                siblingSpan.removeAttr("contenteditable");
            })
        }
    });

});
