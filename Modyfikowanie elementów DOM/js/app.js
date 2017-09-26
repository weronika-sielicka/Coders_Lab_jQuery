$(function() {

  var panel = $("<div class=\"panel\"></div>");
  var people = $('.people');
  panel.text("Dowolny tekst");

  people.after(panel);


  //Zadanie 1
  var people = $('.people');

  var button = $('input[type=submit]');

var main = $('.main');

  button.on("click", function() {
    var addUserValue = $('#addUser').val();
    var ageValue = $('#age').val();
    var li = $('<li>');
    li.attr('data-age', ageValue);
    li.text(addUserValue);
var liColored = setColor(li);
main.append(liColored);

  })





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


  //Zadanie 2

  var wia = $('.where-i-am');
  var spanAppend = $("<span>Tutaj jestem Append</span>");
  var spanPreppend = $("<span>Tutaj jestem Preppend</span>");
  var spanBefore = $("<span>Tutaj jestem Before</span>");
  var spanAfter = $("<span>Tutaj jestem After</span>");
  wia.append(spanAppend);
  wia.prepend(spanPreppend);
  wia.before(spanBefore);
  wia.after(spanAfter);

  //3
  var blocks = $(".block");

      blocks.each(function() {
          var ths = $(this);
          ths.on("click", function() {
              var par = ths.parent();
              if (par.hasClass("left")) {
                  par.siblings(".right").append(ths);
              } else {
                  par.siblings(".left").append(ths);
              }
          })
      })

      //Ciekawostka
      <input type="text" value="Wpisz imię i nazwisko" id="addUser"/>
      console.log(addUser) // <input type="text" value="Wpisz imię i nazwisko" id="addUser"/>






});
