
let førsteKlikk = null; //Oppretter variabler som lagrer verdien til det første kortet spilleren klikker på
let andreKlikk = null;


//oppretter en array som vil representerer alle de ulike verdiene som de ulike knappene kan ha
const arrayPar = [
    "A", //A representere et kort i spillet
    "A", //den andre 'A' representerer det matchende korte
    "B",
    "B",
    "C",
    "C",
    "D",
    "D",
];

let ShuffleResultat = []; //Lager en ny tom array som skal fylles med kortene i tilfeldig rekkefølge etter at de er "shufflet"
while (arrayPar.length > 0){
    let randomTall = Math.floor(Math.random() * arrayPar.length); //Oppretter et random heltall - https://www.w3schools.com/js/js_random.asp?
    ShuffleResultat.push(arrayPar.splice(randomTall, 1)); //splice - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice?
}
console.log(ShuffleResultat);

//en annen metode - https://www.geeksforgeeks.org/dsa/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/


const spillkort = document.querySelectorAll(".game-board button"); //henter alle knappene boksene inne i game-board-elementet og lagrer dem som en liste av DOM-elementer

for (let i = 0; i < spillkort.length; i++) { 
    let knapp = spillkort[i];
    knapp.dataset.verdi = ShuffleResultat[i];  // sett verdien til kortet basert på den blandede arrayen

    knapp.addEventListener("click", function(){; //her oppretter vi en funksjon som kjører hver gang vi klikker på en av knappen
        
        if (førsteKlikk === null){ 
            førsteKlikk = this.dataset.verdi; //dataset.verdihttps://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#:~:text=When%20attaching%20a%20handler%20function,is%20passed%20to%20the%20handler
            console.log(førsteKlikk);

            this.innerText = this.dataset.verdi;
            this.style.backgroundColor = "green";
            
            return;
            }
                    
        if (andreKlikk === null){
            andreKlikk = this.dataset.verdi;
            this.innerText = this.dataset.verdi;
            console.log(andreKlikk);
        }



        if (førsteKlikk == andreKlikk){
            let nyttTall = document.querySelector(".oversikt-over-riktige-nr");
            let eldreTall = Number(nyttTall.innerText); //Number for å endre fra str til tall
            nyttTall.innerText = eldreTall+ 1; //vi forteller at det som nylig ble oprettet i parangtesen skal være det tidligere tallet + 1
            console.log("MATCH");
        }

        else{
            console.log("ikke en match, prøv igjen");
            let antallFeil = document.querySelector(".feil-antall");
            let tidligere_antallFeil = Number(antallFeil.innerText);
            antallFeil.innerText = tidligere_antallFeil+1;
        }

        førsteKlikk = null; //resetter verdiene
        andreKlikk = null;

    })
}


//Her har jeg laget en knapp for å starte spille på nytt
let restart = document.querySelector(".restart-knapp"); //når vi skal velge en klasse må vi bruke noe annet enn GetElementById.
restart.addEventListener("click", function(){
    alert("Er du sikker på at du har lyst til å restarte spillet?")
    location.reload(true); //https://www.enable-javascript.com/no/
})