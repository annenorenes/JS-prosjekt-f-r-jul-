arrayPar.sort(() => 0.5 - Math.random()); //her bruker jeg sort funksjonen sammen med Math.random, og dermed gjør slik at arrayen blir sortert i en random rekkefølge. Kilde: https://dev.to/areeburrub/randomly-sort-array-in-one-just-line-2oab

let ShuffleResultat = [];
while (arrayPar.length > 0){ //mens det fins kort igjen..
    let randomPar = Math.floor(Math.random() * arrayPar.length); //Finn et tilfedlig kort
    ShuffleResultat.push(arrayPar.splice(randomPar, 1)); //fjern det tilfeldige kortet 
}

// https://www.geeksforgeeks.org/dsa/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
function Shuffle(array) {
    for (let i = array.lenght; i > 0; i--){
    const randomly = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomly]] = [array[i], array[randomly]]
    }
}
Shuffle(arrayPar);


