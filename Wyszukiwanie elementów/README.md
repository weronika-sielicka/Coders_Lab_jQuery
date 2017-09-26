<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Wyszukiwanie elementów

> Odpowiedzi wpisz w odpowiednich plikach, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.
Jeśli  polecenie w zadaniach brzmi: "Stwórz nową funkcję, w której wykonasz te czynności" to znaczy, że
należy stworzyć funkcję. Nawet jeśli treści zadań są mało skomplikowane,
ucz się używać funkcji.


## Zadanie rozwiązywane z wykładowcą

### 1  (~ 2min - 5min)
Dołącz do swojego pliku bibliotekę jQuery. W pliku **app.js** umieść kod sprawdzający, czy DOM został załadowany.
Następnie wyszukaj elementy ```section``` i ustaw im **klasę** ```backgroundElement```. Stwórz nową funkcję, w której
wykonasz te czynności.

### 2 (~ 2min - 5min)
Wyszukaj element ```nav``` wewnątrz **sekcji** ```links```. Dodaj mu **klasę** ```hover-effect```.

-------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 5min - 10min)

Zapoznaj się z plikiem **index.html** oraz odpowiednimi plikami CSS. Dodaj **klasę** ```borderClass``` do każdego elementu
**li** ( Uwzględnij tylko **sekcję** o **klasie** ```main```).

### Zadanie 2 (~ 5min - 10min)

Ustaw każdemu elementowi **li** (tylko te w **sekcji** o **klasie** ```main```) dodatkowe dwie **klasy**:
* ```colorText```,
* ```backgroundElement```.
Znajdziesz je w pliku **style.css** pod odpowiednim komentarzem.
Łącznie z poprzednią **klasą** ```borderClass```będą to trzy **klasy** ustawione dla każdego **li**.

### Zadanie 3 (~ 5min - 10min)

Za pomocą jQuery wykonaj następujące czynności:

1. Wyszukaj wszystkie linki i ustaw im czerwony kolor za pomocą funkcji ```css()```.
2. Zmodyfikuj kod tak, aby kolor czerwony miały linki tylko z menu.
3. Dodaj **klasę** ```redLinks``` w pliku **style.css** (ustaw w niej kolor tekstu na czerwony) i za pomocą ```addClass``` nadaj ją elementom **li** w menu (zmodyfikuj kod z podpunktów 1. i 2 czyli zamień funkcje css() na addClass() ).
4. Spraw, aby pierwszy element menu miał większy font niż inne. Stwórz odpowiednią **klasę** w pliku **style.css**.

### Zadanie 4  (~ 2min - 3min)

Dodaj do elementu **h1**  **klasę** ```creepyHeader```, a następnie:
* jego rodzicowi (wyszukaj go za pomocą parent() ) ustaw dowolne obramowanie za pomocą funkcji css() )
* następnemu elementowi po nim (po h1) dodaj klasę ```crazy```. Sprawdź czy na pewno została dodana.


### Zadanie 5  (~ 5min - 7min)

Wypisz w konsoli pierwszy, trzeci i ostatni element menu. Użyj odpowiednich funkcji. Dodaj do znalezionych elementów **klasę** ```menuLinks```.


### Zadanie 6  (~ 5min - 7min)

Wypisz w konsoli pierwszy, trzeci i ostatni element menu. Użyj odpowiednich funkcji. Dodaj do znalezionych elementów **klasę** ```menuLinks```. Schowaj trzeci element za pomocą funkcji hide().


### Zadanie 7  (~ 5min - 7min)

W pliku ```index.html``` znajdziesz sekcję o klasie ```form```. Znajdują się w niej dwa pola ```input```.

Pobierz wartości, które są w nich ustawione i wyświetl je w konsoli.

### Zadanie 8  (~ 5min - 7min)

W pliku ```index.html``` znajdziesz link o id ```codersLink```. Zapisz  jego atrybut href do zmiennej i wypisz w konsoli. Nastepnie podmień go na inny dowolny :)


### Zadanie 9  (~ 5min - 7min)

W pliku ```index.html``` znajdziesz sekcję o klasie ```links```. Pobierz atrybut data-hover do zmiennej i wypisz go w konsoli. Spróbuj za pomocą funkcji ```data``` oraz ```attr```.
Jak widzisz są one źle wpisane w html, spróbuj je podmienić za pomocą funkcji data().
