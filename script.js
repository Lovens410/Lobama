// #1 mete tout karaktè yo an miniskil.

let chenn = "Kod 9 klas bon bagay.";
console.log(chenn.toLowerCase());

// #2 koupe chenn nan tout kote ki gen espas. Epi afiche yon tablo ki gen chak eleman yo.

let koupeChenn = "Ayiti peyi lanmou";
let tablo = koupeChenn.split(" ") //fonksyon ki separe chenn lan mo pa mo apre chak espas
 

 //bouk pou afiche chak mo nan chenn lan nan yon tablo
for (let i = 0; i < tablo.length; i++){
	document.write(" " + tablo[i] + " ");
	console.log(tablo[i]);
}

//#3 mete tout tout premye let chak mo nan yon chenn karakte an majiskil

let premyeLetMoMajiskil = "dyaman nan bidonvil";
console.log(premyeLetMoMajiskil)
 let nouvoChenn = premyeLetMoMajiskil.split(" "); //separe mo yo

 for(let i = 0; i < nouvoChenn.length; i++){ //pakouri chak mo tablo a
 	nouvoChenn[i]=nouvoChenn[i]
 	.charAt(0).toUpperCase() + nouvoChenn[i].slice(1); //transfome premye karate yo an majiskil epi konkatnel ak res mo a
 }
 let moYo = nouvoChenn.join(" "); //rejwenn tout mo ki modifye yo nan sel chenn
 console.log(moYo); 

 //#4 rekipere premye lèt chak mo. Epi afiche yon nouvo chenn ak tout inisyal sa yo.
 
 let rekiperePremyeLet = "Lekol an ayiti pa oganize byen";

let moYo1 = rekiperePremyeLet.split(" ");
let premyeLet = " ";

for (let i = 0; i < moYo1.length; i++) {
  premyeLet += moYo1[i].charAt(0);
}

console.log(premyeLet);


//#5 Ranplase tout karaktè "a" ki nan yon chenn pa "@"

let chennKarakte = "Mwen p'ap kite ayiti nenpot jan";

let ranplaseKarakte = "";
for(let i = 0; i < chennKarakte.length; i++){
	if (chennKarakte[i] === 'a') {
        ranplaseKarakte += '@';
	} else {
        ranplaseKarakte += chennKarakte[i];
    }
	
}
console.log(ranplaseKarakte)