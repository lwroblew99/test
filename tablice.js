var produkty=["jablko", "banan", "pomarancza"];
produkty[3]="ogorek";
produkty[produkty.length]="blabla";

//alert(produkty[3]);
//alert(produkty.length);

/*
 * metody użyteczne:
 * concat od concatanate (powiązać) łączy / wiąże ze sobą dwie tablice
 * join - połączyć elementy tablicy w określony przez nas sposób
 * pop - usunąć ostatni element tablicy i go zwrócić do dalszej operacji
 * push - popchnąć element na koniec tablicy, zwraca długość tablicy
 * shift - przesunąć (usunąć pierwszy element z tablicy i go zwrócić)
 * unshift - przesuwa wszystko o 1 element i dodaje nowy element
 * liczby.sort(function(a, b){ return a - b;}); - sortuje rosnąco, gdy b - a to malejąco, a domyślnie sortuje stringi
 * reverse - odwróć kolejność el. w tablicy
 * slice - kroić - od <1,3]
 * splice - arg1 - od którego el. ma zaczać usuwać, arg2 - il. el ma usunąć - lepić
 *
 */

//document.getElementById("tablice").innerHTML=produkty.pop();
//document.getElementById("tablice").innerHTML=produkty.join("<br>");
document.getElementById("tablice").innerHTML=produkty.push("nowy element");
//document.getElementById("tablice").innerHTML=produkty.shift();
//document.getElementById("tablice").innerHTML=produkty.unshift("banan");
//document.getElementById("tablice").innerHTML=produkty.sort();    //sortowanie dziala zawsze dla stringow
//document.getElementById("tablice").innerHTML=produkty.slice(1,2);
//document.getElementById("tablice").innerHTML=produkty.splice(1,2,"cosik","dupcia","klopsior" );

document.getElementById("tablice").innerHTML += "<br>--------<br>";
document.getElementById("tablice").innerHTML+=produkty;


