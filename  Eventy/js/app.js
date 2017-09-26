$(function(){

var dt = $('dt');

dt.on("mouseenter", function(){
console.log($(this));

});


var buttons = $('.hero-buttons').children();

buttons.each(function(){
  var ths = $(this);
  ths.on("click", function(){
    console.log(ths.data('feature'));
  })
})

//Zadanie 1

var supDes = $('.superhero-description');
var dts =   supDes.find('dt');
var dds = supDes.find('dd');

dds.addClass('hide');


dts.each(function(){
  var ths = $(this);
  ths.on("click", function(){
    ths.next().slideToggle('hide');


  })
})


//Zadanie 2
var shopping = $('.shopping');
var clicked = false;
var btns = $('.shopping').find('button');

btns.each(function(){
  var ths = $(this);
  ths.on("click", function(){

if(!clicked){

    ths.addClass('added');
ths.parent().css('border-color', 'green');
ths.text('Dodano');
clicked=true;
}
else {
  ths.removeClass('added');
  ths.text('Dodaj');
  ths.parent().css('border-color', '#ccc');

  clicked=false;
}

  })
})

























});
