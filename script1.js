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
 console.log( rekiperePremyeLet)

let moYo1 = rekiperePremyeLet.split(" "); //separe mo yo
let premyeLet = " ";

for (let i = 0; i < moYo1.length; i++) { //pakouri chenn lan pou w jwenn chak mo epi pou w pran premye karakte a
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





//#6 Mete yon chenn karaktè devan dèyè, answit mete l an majiskil

let chennKarakteDevanDeye = "Lobama";
console.log(chennKarakteDevanDeye);

let tabSepare = chennKarakteDevanDeye.split(""); //separe karakte yo nan yon tablo
let DevanDeye = tabSepare.reverse(); //ranje karakte yo devan deye, nan lod


let chennDevanDeye = DevanDeye.join(""); // rejwenn karakte yo pou fome chenn devan deye a
console.log( chennDevanDeye); 


let  chennDevanDeyeMajiskil =  chennDevanDeye.toUpperCase(); //mete l an majiskil
console.log( chennDevanDeyeMajiskil); 




//#7 Afiche endeks premye karaktè "a" ki nan yon chenn.

const aficheEndeks = "Nou kapab"
console.log(aficheEndeks)
let endeksPremyeKarakte = aficheEndeks.indexOf("a"); // chache kote 'a' ye nan chenn lan

console.log(endeksPremyeKarakte)




//#8 Afiche total tout endeks karaktè "a" ki nan yon chenn (Kit se a majiskil oubyen miniskil).

let chennEndeks = " Ayisyen, ayiti se pa nou, annou pa adandone l";
console.log(chennEndeks)

let endeks = -1;
let totalEndeks = 0

//jwenn endeks karaktè 'a' majiskil osnon miniskilnan chenn lan
while((endeks = chennEndeks.toLowerCase().indexOf("a", endeks + 1)) !== -1){
	totalEndeks += endeks // adisyon chak endeks karaktè 'a' ki jwenn
}
console.log(totalEndeks)




//#9 Kreye yon tablo ki gen endèks tout karaktè "a" ki nan yon chenn (Sèlman a miniskil).

let mesajPouAyisyen = "Ayisyen, ayiti se pa nou, annou pa adandone l";
console.log(mesajPouAyisyen);

let chennEndeksYo = mesajPouAyisyen; // Variab ki gen chen lan

let endeksYo = -1;
let tabloEndeks = [];

while ((endeksYo = chennEndeksYo.indexOf("a", endeksYo + 1)) !== -1) {
    if (chennEndeksYo[endeksYo] === "a") { // Verifye si karakte nan endeks yo an miniskil
        tabloEndeks.push(endeksYo); // Anpile endeks yo youn apre lot nan tablo a
    }
}

console.log(tabloEndeks);




//#10 Retire tout espas ki nan yon chenn, epi kole chenn sa ak kantite karaktè li genyen (Pa kontwole espas yo).

let retireEspasNanChenn = "Nou pral retire tout espas ki nan chenn sa"
console.log( retireEspasNanChenn )

let espasRetire = retireEspasNanChenn.replace(/\s/g, '') //retire espas yo

console.log(espasRetire)

let kontwoleChenn = espasRetire.length // kontwole karakte yo nan chenn kan sans espas

console.log("Kantite karakte chenn lan genyen sans espas : " +  kontwoleChenn)



