$(function() {

    // variables for DOM
    var ul = $("#holiday-dates");

    //Tutaj wpisz cały adres z kluczem, będzie on wyglądał mniej więcej tak:
    //'https://holidayapi.com/v1/holidays?key=21e877a6-77f7-7777-9999-e6f5f4519f25&country=EN&year=2016';
    var holidayUrl = 'https://holidayapi.com/v1/holidays?key=2c2c7c87-4630-4461-8004-a2f892974dc7';

    function insertHolidays(days) {
        //Użyj sposobu na pobranie wartości z obiektu (nie kluczy) np. pętla for in
for(key in days){
  //console.log(days[key][0]);
  var li = $('<li>').text(days[key][0].name);
  var span = $('<span>').text(days[key][0].date);
  li.append(span);
  ul.append(li);

}




    }


$.ajax({
url: holidayUrl,
data: {
  country: "PL",
  year: 1687
},
dataType: 'json'
}).done(function(response){
  insertHolidays(response.holidays);
}).fail(function (error) {
  console.log(response.holidays);
})





});
