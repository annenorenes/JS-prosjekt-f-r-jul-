let førsteKlikk = null;
let andreKlikk = null;
let valgtKort1 = null; 
let valgtKort2 = null;

let arrayPar = [
    "A", 
    "B",
    "A", 
    "B",
    "C",
    "C",
    "D",
    "D",
];

let ShuffleResultat = []; 
while (arrayPar.length > 0){
    let randomTall = Math.floor(Math.random() * arrayPar.length); 
    ShuffleResultat.push(arrayPar.splice(randomTall, 1)); 
}
console.log(ShuffleResultat);


let spillkort = document.querySelectorAll(".game-board button");

for (let i = 0; i < spillkort.length; i++) { //går gjennom hvert kort
    let knapp = spillkort[i]; //for hver gang løkken kjører henter vi ut et kort for hver gang 
    knapp.dataset.verdi = ShuffleResultat[i];  // sett verdien til kortet basert på den blandede arrayen

    knapp.addEventListener("click", function(){; //her oppretter vi en funksjon som kjører hver gang vi klikker på en av knappen
        if (førsteKlikk === null){ 
            førsteKlikk = this.dataset.verdi; //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#:~:text=When%20attaching%20a%20handler%20function,is%20passed%20to%20the%20handler
            valgtKort1 = this
            valgtKort1.disabled = true;
            console.log(førsteKlikk);

            this.innerText = this.dataset.verdi

            return;
            }

        if (andreKlikk === null){
            andreKlikk = this.dataset.verdi;
            valgtKort2 = this
            valgtKort2.disabled = true;
            console.log(andreKlikk);

            this.innerText = this.dataset.verdi
        }

        
        setTimeout(() => {

        if (førsteKlikk == andreKlikk){
            //når vi for en match vil jeg endre statestikken slik at antall riktige øker 
            let nyttTall = document.querySelector(".oversikt-over-riktige-nr");
            let eldreTall = Number(nyttTall.innerText); //her bruker jeg number for å endre det som står i parangtest
            nyttTall.innerText = eldreTall+1; //vi forteller at det som nylig ble oprettet i parangtesen skal være det tidligere tallet + 1
            console.log("MATCH"); 
        }
    

        else{
            console.log("ikke en match, prøv igjen");
            let antallFeil = document.querySelector(".feil-antall");
            let tidligere_antallFeil = Number(antallFeil.innerText);
            antallFeil.innerText = tidligere_antallFeil+1;

            valgtKort1.innerText = "";
            valgtKort2.innerText = "";
            valgtKort1.disabled = false;
            valgtKort2.disabled = false;
         
        }

        førsteKlikk = null;
        andreKlikk = null;
        valgtKort1 = null; 
        valgtKort2 = null;

       
    }, 1000);

});


//Her har jeg laget en knapp for å starte spille på nytt
let restart = document.querySelector(".restart-knapp");
restart.addEventListener("click", function(){
    alert("Er du sikker på at du har lyst til å restarte spillet?")
    location.reload(true); //https://www.enable-javascript.com/no/
})
}
