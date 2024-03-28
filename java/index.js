///////////////////////////////////////AUDIO///////////////////////////////////////////
const kleedGeluid = new Audio ('media/plop.mp3');
    //audiobron: mijn mond :)
const klaarGeluid = new Audio ('media/tada.mp3');
    //audiobron: windows 4 !!
    //bron hoe dit te doen: https://gomakethings.com/how-to-play-a-sound-with-javascript/

//////////////////////////////////////HINTS////////////////////////////////////////////
//hulp van bron: chatgpt, met prompt "can you provide steps for how to write a line of code in javascript that links the press of a button to a text change, to a different random item from an array?"
const haroldHints = [
    "Ik probeer wat minder koffie te drinken...",
    "Een bakje lekkere friet laat ik nooit staan!",
    "Het jaarkompas wijst altijd de weg!",
];

const knopVoorHint = document.querySelector("#hintKnop");
const hintVanHarold = document.querySelector("#haroldHint");
function nieuweHint() {
    const randomIndex = Math.floor(Math.random() * haroldHints.length);
    const gekozenHint = haroldHints[randomIndex];
    hintVanHarold.textContent = gekozenHint;
}
knopVoorHint.addEventListener("click", nieuweHint);


///////////////////////////////AANKLEDEN HAROLD//////////////////////////////////////
let haroldBrilGoed = false;
let haroldShirtGoed = false;
let haroldHoedGoed = false;

///////////////////AANKLEDEN: BRILLEN/////
//GEWONE BRIL//
const knopBril = document.querySelector("#itemBril");
const brilLaag = document.querySelector("#laagBril");
function toonBril(){
    brilLaag.classList.toggle("hidden");
    zonnebrilLaag.classList.add("hidden")
    groteBrilLaag.classList.add("hidden");
    monocleLaag.classList.add("hidden");
    haroldBrilGoed = !haroldBrilGoed;
    //hier wordt getoggled! bron: chatgpt, "how do i toggle a boolean between true and false within a function?"
    kleedGeluid.play();
    checkOfKlaar();
    }
knopBril.addEventListener('click', toonBril);

//ZONNEBRIL//
const knopZonnebril = document.querySelector("#itemZonnebril");
const zonnebrilLaag = document.querySelector("#laagZonnebril");
function toonzonnebril(){
    zonnebrilLaag.classList.toggle("hidden");
    brilLaag.classList.add("hidden");
    groteBrilLaag.classList.add("hidden");
    monocleLaag.classList.add("hidden");
    haroldBrilGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knopZonnebril.addEventListener('click', toonzonnebril);

//MONOCLE//
const knopMonocle = document.querySelector("#itemMonocle");
const monocleLaag = document.querySelector("#laagMonocle");
function toonMonocle(){
    monocleLaag.classList.toggle("hidden");
    brilLaag.classList.add("hidden");
    groteBrilLaag.classList.add("hidden");
    zonnebrilLaag.classList.add("hidden");
    haroldBrilGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knopMonocle.addEventListener('click', toonMonocle);

//GROTEBRIL//
const knopGroteBril = document.querySelector("#itemGroteBril");
const groteBrilLaag = document.querySelector("#laagGroteBril");
function toongroteBril(){
    groteBrilLaag.classList.toggle("hidden");
    brilLaag.classList.add("hidden");
    zonnebrilLaag.classList.add("hidden");
    monocleLaag.classList.add("hidden");
    haroldBrilGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knopGroteBril.addEventListener('click', toongroteBril);


///////////////////AANKLEDEN: HOEDEN/////
//PETJE//
const knopPetje = document.querySelector("#itemPetje");
const petjeLaag = document.querySelector("#laagPetje");
function toonPetje(){
    petjeLaag.classList.toggle("hidden");
    petBlauwLaag.classList.add("hidden");
    beanieLaag.classList.add("hidden");
    baretLaag.classList.add("hidden");
    haroldHoedGoed = !haroldHoedGoed;
    kleedGeluid.play();
    checkOfKlaar();
    }
knopPetje.addEventListener('click', toonPetje);

//PETBLAUW//
const knopPetBlauw = document.querySelector("#itemPetBlauw");
const petBlauwLaag = document.querySelector("#laagPetBlauw");
function toonPetBlauw(){
    petBlauwLaag.classList.toggle("hidden");
    petjeLaag.classList.add("hidden");
    beanieLaag.classList.add("hidden");
    baretLaag.classList.add("hidden");
    haroldHoedGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knopPetBlauw.addEventListener('click', toonPetBlauw);

//BEANIE
const knopBeanie = document.querySelector("#itemBeanie");
const beanieLaag = document.querySelector("#laagBeanie");
function toonBeanie(){
    beanieLaag.classList.toggle("hidden");
    petjeLaag.classList.add("hidden");
    petBlauwLaag.classList.add("hidden");
    baretLaag.classList.add("hidden");
    haroldHoedGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knopBeanie.addEventListener('click', toonBeanie);

//BARET
const knopBaret = document.querySelector("#itemBaret");
const baretLaag = document.querySelector("#laagBaret");
function toonBaret(){
    baretLaag.classList.toggle("hidden");
    petjeLaag.classList.add("hidden");
    petBlauwLaag.classList.add("hidden");
    beanieLaag.classList.add("hidden");
    haroldHoedGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knopBaret.addEventListener('click', toonBaret);


///////////////////AANKLEDEN: SHIRTS/////
//PAARSSHIRT
const knopPaarsShirt = document.querySelector("#itemPaarsShirt");
const paarsShirtLaag = document.querySelector("#laagPaarsShirt");
function toonpaarsShirt(){
    paarsShirtLaag.classList.toggle("hidden");            
    shirtZwartLaag.classList.add("hidden");
    hoodieLaag.classList.add("hidden");
    turtleneckLaag.classList.add("hidden");
    haroldShirtGoed = !haroldShirtGoed;
    kleedGeluid.play();
    checkOfKlaar();
    }
knopPaarsShirt.addEventListener('click', toonpaarsShirt);

//SHIRTZWART
const knopShirtZwart = document.querySelector("#itemShirtZwart");
const shirtZwartLaag = document.querySelector("#laagShirtZwart");
function toonshirtZwart(){
    shirtZwartLaag.classList.toggle("hidden");
    paarsShirtLaag.classList.add("hidden");
    hoodieLaag.classList.add("hidden");
    turtleneckLaag.classList.add("hidden");
    haroldShirtGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knopShirtZwart.addEventListener('click', toonshirtZwart);

//HOODIE
const knopHoodie = document.querySelector("#itemHoodie");
const hoodieLaag = document.querySelector("#laagHoodie");
function toonhoodie(){
    hoodieLaag.classList.toggle("hidden");
    paarsShirtLaag.classList.add("hidden");
    shirtZwartLaag.classList.add("hidden");
    turtleneckLaag.classList.add("hidden");
    haroldShirtGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knopHoodie.addEventListener('click', toonhoodie);

//TURTLENECK
const knopTurtleneck = document.querySelector("#itemTurtleneck");
const turtleneckLaag = document.querySelector("#laagTurtleneck");
function toonturtleneck(){
    turtleneckLaag.classList.toggle("hidden");
    paarsShirtLaag.classList.add("hidden");
    shirtZwartLaag.classList.add("hidden");
    hoodieLaag.classList.add("hidden");
    haroldShirtGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knopTurtleneck.addEventListener('click', toonturtleneck);


///////////////////VOLTOOIINGSCHECK/////
let haroldklaar = false
const terugknop = document.querySelector("#terugknop");
function checkOfKlaar(){
    if (haroldShirtGoed === true && haroldBrilGoed === true && haroldHoedGoed === true){      
        console.log("joepie!");
        klaarGeluid.play();
        haroldklaar = true;
        hoeraHarold.classList.toggle("hidden");
        clearInterval(timerInterval);
        terugknop.href = "docentgevonden.html";
        }}


/////////////////////TIMER///////////////
//telt omhoog tijdens maken mannetje: stopt als je klaar bent en displayt die tijd!//
//met hulp van bron: chatgpt, "Can you provide me the steps to build a JavaScript timer, counting up from zero, with four digits, that stops when the boolean "haroldKlaar" is changed to true, and changes the text content of "ZOVEELTIJD" to the amount of time passed?"
    let startTijd = 0;
    let timerInterval;
    const timerDisplay = document.querySelector("#timer");
    const TimerWaarde = document.querySelector("#TimerTijd");

    function startTimer() {
        startTijd = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
    }
    function updateTimer() {
        const nuTijd = Date.now();
        const tijdVoorbij = Math.floor((nuTijd - startTijd) / 1000);
        const minuten = Math.floor(tijdVoorbij / 60);
        const seconden = tijdVoorbij % 60;
        const formattedTime = padNumber(minuten) + ':' + padNumber(seconden);
        timerDisplay.textContent = formattedTime;
        TimerWaarde.textContent = "Goed werk! Je hebt de docent van vandaag gevonden in " + formattedTime + ".";
    }
    function padNumber(number) {
        return (number < 10 ? '0' : '') + number;
        //hierdoor wordt de tijd gedisplayed als b.v. 01:00 ipv
    }
    startTimer();