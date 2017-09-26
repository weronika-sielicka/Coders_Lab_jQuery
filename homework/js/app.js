$(function() {

//Zadanie z formularzem


var form = $('form');
    var inputs = form.find('input[type=text]');
    var error = $('.error');

    form.on('submit', function(e){
        var errors = [];
        inputs.each(function(){
            var ths = $(this);
            if(ths.val().length < 6) {
                errors.push("Pole " + ths.attr('name') + "jest źle wypełnione")
            }
        })
        var errorsLength = errors.length;
        if(errorsLength > 0) {
            for (var i = 0; i < errorsLength; i++) {
                error.append(errors[i]);
            }
            e.preventDefault();
        }
    })

    //Zadanie textarea
    /*
    var textarea = $('textarea');
  var info = $('#info');

  textarea.on("change", function() {
      info.text($(this).val().length);
  })
  */


//Zadanie domowe


  var maxchars = 100;

  $('textarea').keyup(function () {
      var tlength = $(this).val().length;
      $(this).val($(this).val().substring(0, maxchars));
      var tlength = $(this).val().length;
      remain = maxchars - parseInt(tlength);
      $('#remain').text(remain);

      if(remain <= 25){
      $('textarea').css('background-color', 'red');
      } else if (remain <=50){
          $('textarea').css('background-color', 'yellow');
      } else {
              $('textarea').css('background-color', 'green');

      }

  });

















});
