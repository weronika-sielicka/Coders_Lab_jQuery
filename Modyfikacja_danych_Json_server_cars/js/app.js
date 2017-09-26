$(function() {

  var ul = $(".cars_list");
  var url = "http://localhost:3000/cars";
  var form = $("form");




  //inserting data
  function insertData(data) {
    var dataLength = data.length;
    for (var i = 0; i < dataLength; i++) {
      var li = $("<li>");
      var span = $("<span>").text(data[i].brand);
      var h3 = $("<h3>").text(data[i].name);
      //button to remove a car
      var deleteButton = $("<button>", {
          "data-id": data[i].id,
          "class": "deleteButton"
        })
        .text("Delete");
      //button to edit a car
      var editButton = $("<button>", {
          "data-id": data[i].id,
          "class": "editButton"
        })
        .text("Edit");
      li.append(span);
      li.append(h3);
      li.append(deleteButton);
      li.append(editButton);
      ul.append(li);
    }
  }

  $.ajax({
    url: url,
    dataType: "JSON"
  }).done(function(response) {
    insertData(response);
  });

  //adding new cars
  function addCar(car) {
    var li = $("<li>");
    var span = $("<span>").text(car.brand);
    var h3 = $("<h3>").text(car.name);
    //button to remove a car
    var deleteButton = $("<button>", {
        "data-id": car.id,
        "class": "deleteButton"
      })
      .text("Delete");
      //button to edit a car
      var editButton = $("<button>", {
          "data-id": car.id,
          "class": "editButton"
        })
        .text("Edit");

    li.append(h3);
    li.append(span);
    li.append(deleteButton);
    li.append(editButton);
    ul.append(li);
  }

  form.on("submit", function(e) {
    var brandValue = $(".get_brand").val();
    var nameValue = $(".get_name").val();
    $.ajax({
      url: url,
      type: 'post',
      data: {
        brand: brandValue,
        name: nameValue
      },
      dataType: 'json'
    }).done(function(response) {
      addCar(response);
    })
  });

  //Removing a car
  //This is an event, because a function is not necessary

  ul.on("click", ".deleteButton", function(e) {
    var ths = $(this);
    if (confirm("Are you sure you want to delete this item?")) {
      $.ajax({
        url: url + '/' + ths.data('id'),
        type: "delete",
        dataType: 'json'
      }).done(function() {
        ths.parent().remove();
      });
    }
  });


  //Editing a car (update)
  //This is an event, because a function is not necessary

  ul.on("click", ".editButton", function() {
    var ths = $(this);
    var buttonText = ths.text();
    var parent = ths.parent();
    var editSpan = parent.find("span");
    var editH3 = parent.find("h3");

    if (buttonText === "Edit"){
        ths.text("Confrim");
        editSpan.attr("contenteditable", "true");
        editH3.attr("contenteditable", "true");
        editSpan.addClass("editable");
        editH3.addClass("editable");
    } else {
        $.ajax({
            url: url + "/" + ths.data('id'),
            type: "PUT",
            data: {
                brand: editSpan.text(),
                name: editH3.text()
            },
            dataType: "JSON"
        }).done(function() {
            ths.text("Edit");
            editSpan.removeAttr("contenteditable");
            editH3.removeAttr("contenteditable");
            editSpan.removeClass("editable");
            editH3.removeClass("editable");
        })
    }


  });









});
