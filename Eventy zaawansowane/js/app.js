$(function() {

  //Zadanie z wykładowcą
      var panel = $("<div class=\"panel\"><div>");
      var people = $(".people");

      panel.html("<span>Dowolny text</span>");
      people.after(panel);
      panel.find("span").hide();
      $("body").on("mouseenter", ".panel", function() {
          $(this).find("span").show();
      })
          .on("mouseleave", ".panel", function() {
              $(this).find("span").hide();
          });


//Zadanie 1


var people = $('.people');

var button = $('input[type=submit]');

var main = $('.main');

var deleteBtn = $('<button class=\"delete\">Usuń</button>');
main.find("li").append(deleteBtn);

var editBtn = $('<button class=\"edit\">Edytuj</button>');
main.find("li").append(editBtn);


button.on("click", function() {
  var addUserValue = $('#addUser').val();
  var ageValue = $('#age').val();
  var li = $('<li>');
  var newDeleteBtn = $('<button class=\"delete\">Usuń</button>');
var newEditBtn = $('<button class=\"edit\">Edytuj</button>');

  li.attr('data-age', ageValue);
  li.text(addUserValue);
  li.append(newDeleteBtn);
  li.append(newEditBtn);


var liColored = setColor(li);
main.append(liColored);
//li.append(deleteBtn);

})

//funkcja do usuwania
main.on("click", ".delete", function(){
$(this).parent().remove();
});

//funkcja do edytowania

main.on("click", ".edit", function(){
var ths = $(this);
if((typeof ths.parent().attr("contenteditable") === "undefined") || (ths.parent().attr("contenteditable") === "undefined") ){
ths.parent().attr("contenteditable", "true");
ths.text("Zatwierdź");

}

else {
  ths.parent().attr("contenteditable", "false");
  ths.text("Edytuj");
}
});


function setColor(obj) {
  var age = obj.data('age');
  switch (true) {
    case age < 16:
      obj.css("color", "green");
      break;
    case age < 41:
      obj.css("color", "blue");
      break;
    default:
      obj.css("color", "brown");
  }
  return obj;
}


//WALIDACJA FORMULARZA!!!





przeropbić kod z textarea żeby limit znaków to 100 a kolejne znaki żeby ucinało bez użycia max length




















});
