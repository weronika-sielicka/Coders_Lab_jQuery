//Zadanie z wykładowcą

$(function(){

var section = $('section');
section.addClass('backgroundElement');


$('.links').find("nav").addClass('hover-effect');



//Zadanie 1
var mainLi = $('.main').find('li');
mainLi.addClass('borderClass');

//Zadanie 2
mainLi.addClass('colorText backgroundElement');

//Zadanie 3
var links = $('.menu').find('li').find('a');
var firstMenuLink = $('.menu').find('li').eq(0).find('a');

links.addClass('redLinks');
firstMenuLink.addClass('firstLink');



//Zadanie 4

var header = $('h1');

header.addClass('creepyHeader');
header.parent().css('border', '2px solid blue');
header.next().addClass('crazy');

//Zadanie 5

var firstMenu = $('.menu').find('li').first();
var thirdMenu = $('.menu').find('li').eq(2);
var lastMenu = $('.menu').find('li').last();

console.log(firstMenu);
console.log(thirdMenu);
console.log(lastMenu);

//Zadanie 6

firstMenu.addClass('menuLinks');
thirdMenu.addClass('menuLinks');
lastMenu.addClass('menuLinks');

thirdMenu.hide();


//Zadanie 7
var form = $('.form');
console.log(form.find('#name').val());
console.log(form.find('#email').val());

//Zadanie 8
var atribb = $('#codersLink').attr('href');

console.log(atribb);

//Zadanie 9

var nav = $(".links").find('nav').find('a');

nav.each(function() {
        console.log($(this).attr('data-hover', $(this).text()));
    });












});
