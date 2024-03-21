//////////////AUDIO
let kleedGeluid = new Audio ('../media/plop.mp3');
let klaarGeluid = new Audio ('../media/tada.mp3');
    //audiobron: mijn mond :)
    //bron hoe dit te doen: https://gomakethings.com/how-to-play-a-sound-with-javascript/

//////////////HINTS
//hulp van bron: chatgpt, met prompt "can you provide steps for how to write a line of code in javascript that links the press of a button to a text change, to a different random item from an array?"
const haroldHints = [
    "Ik probeer wat minder koffie te drinken...",
    "Een bakje lekkere friet laat ik nooit staan!",
    "Het jaarkompas wijst altijd de weg!",
];

function nieuweHint() {
    const randomIndex = Math.floor(Math.random() * haroldHints.length);
    const gekozenHint = haroldHints[randomIndex];
    document.getElementById("haroldHint").textContent = gekozenHint;
}
document.getElementById("hintKnop").addEventListener("click", nieuweHint);
    
//////AANKLEDEN HAROLD
let haroldBrilGoed = false;
let haroldShirtGoed = false;
let haroldHoedGoed = false;
//AANKLEDEN: BRILLEN
//GEWONE BRIL
const knop_bril = document.querySelector("#item_bril");
const brilLaag = document.querySelector("#laag_bril");
function toonBril(){
    brilLaag.classList.toggle("hidden");
    zonnebrilLaag.classList.add("hidden")
    groteBrilLaag.classList.add("hidden");
    monocleLaag.classList.add("hidden");
    haroldBrilGoed = !haroldBrilGoed;
    // hier wordt getoggled! bron: chatgpt, "how do i toggle a boolean between true and false within a function?"
    kleedGeluid.play();
    checkOfKlaar();
    }
knop_bril.addEventListener('click', toonBril);
//ZONNEBRIL
const knop_zonnebril = document.querySelector("#item_zonnebril");
const zonnebrilLaag = document.querySelector("#laag_zonnebril");
function toonzonnebril(){
    zonnebrilLaag.classList.toggle("hidden");
    brilLaag.classList.add("hidden");
    groteBrilLaag.classList.add("hidden");
    monocleLaag.classList.add("hidden");
    haroldBrilGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knop_zonnebril.addEventListener('click', toonzonnebril);
//MONOCLE
const knop_monocle = document.querySelector("#item_monocle");
const monocleLaag = document.querySelector("#laag_monocle");
function toonMonocle(){
    monocleLaag.classList.toggle("hidden");
    brilLaag.classList.add("hidden");
    groteBrilLaag.classList.add("hidden");
    zonnebrilLaag.classList.add("hidden");
    haroldBrilGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knop_monocle.addEventListener('click', toonMonocle);
//GROTEBRIL//
const knop_groteBril = document.querySelector("#item_groteBril");
const groteBrilLaag = document.querySelector("#laag_groteBril");
function toongroteBril(){
    groteBrilLaag.classList.toggle("hidden");
    brilLaag.classList.add("hidden");
    zonnebrilLaag.classList.add("hidden");
    monocleLaag.classList.add("hidden");
    haroldBrilGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knop_groteBril.addEventListener('click', toongroteBril);
//AANKLEDEN: HOEDEN//
//PETJE//
const knop_petje = document.querySelector("#item_petje");
const petjeLaag = document.querySelector("#laag_petje");
function toonPetje(){
    petjeLaag.classList.toggle("hidden");
    petBlauwLaag.classList.add("hidden");
    beanieLaag.classList.add("hidden");
    baretLaag.classList.add("hidden");
    haroldHoedGoed = !haroldHoedGoed;
    kleedGeluid.play();
    checkOfKlaar();
    }
knop_petje.addEventListener('click', toonPetje);
//PETBLAUW//
const knop_petBlauw = document.querySelector("#item_petBlauw");
const petBlauwLaag = document.querySelector("#laag_petBlauw");
function toonPetBlauw(){
    petBlauwLaag.classList.toggle("hidden");
    petjeLaag.classList.add("hidden");
    beanieLaag.classList.add("hidden");
    baretLaag.classList.add("hidden");
    haroldHoedGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knop_petBlauw.addEventListener('click', toonPetBlauw);
//BEANIE
const knop_beanie = document.querySelector("#item_beanie");
const beanieLaag = document.querySelector("#laag_beanie");
function toonBeanie(){
    beanieLaag.classList.toggle("hidden");
    petjeLaag.classList.add("hidden");
    petBlauwLaag.classList.add("hidden");
    baretLaag.classList.add("hidden");
    haroldHoedGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knop_beanie.addEventListener('click', toonBeanie);
//BARET
const knop_baret = document.querySelector("#item_baret");
const baretLaag = document.querySelector("#laag_baret");
function toonBaret(){
    baretLaag.classList.toggle("hidden");
    petjeLaag.classList.add("hidden");
    petBlauwLaag.classList.add("hidden");
    beanieLaag.classList.add("hidden");
    haroldHoedGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knop_baret.addEventListener('click', toonBaret);
//AANKLEDEN: SHIRTS
//PAARSSHIRT
const knop_paarsShirt = document.querySelector("#item_paarsShirt");
const paarsShirtLaag = document.querySelector("#laag_paarsShirt");
function toonpaarsShirt(){
    paarsShirtLaag.classList.toggle("hidden");            
    shirtZwartLaag.classList.add("hidden");
    hoodieLaag.classList.add("hidden");
    turtleneckLaag.classList.add("hidden");
    haroldShirtGoed = !haroldShirtGoed;
    kleedGeluid.play();
    checkOfKlaar();
    }
knop_paarsShirt.addEventListener('click', toonpaarsShirt);
//SHIRTZWART
const knop_shirtZwart = document.querySelector("#item_shirtZwart");
const shirtZwartLaag = document.querySelector("#laag_shirtZwart");
function toonshirtZwart(){
    shirtZwartLaag.classList.toggle("hidden");
    paarsShirtLaag.classList.add("hidden");
    hoodieLaag.classList.add("hidden");
    turtleneckLaag.classList.add("hidden");
    haroldShirtGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knop_shirtZwart.addEventListener('click', toonshirtZwart);
//HOODIE
const knop_hoodie = document.querySelector("#item_hoodie");
const hoodieLaag = document.querySelector("#laag_hoodie");
function toonhoodie(){
    hoodieLaag.classList.toggle("hidden");
    paarsShirtLaag.classList.add("hidden");
    shirtZwartLaag.classList.add("hidden");
    turtleneckLaag.classList.add("hidden");
    haroldShirtGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knop_hoodie.addEventListener('click', toonhoodie);
//TURTLENECK
const knop_turtleneck = document.querySelector("#item_turtleneck");
const turtleneckLaag = document.querySelector("#laag_turtleneck");
function toonturtleneck(){
    turtleneckLaag.classList.toggle("hidden");
    paarsShirtLaag.classList.add("hidden");
    shirtZwartLaag.classList.add("hidden");
    hoodieLaag.classList.add("hidden");
    haroldShirtGoed = false;
    kleedGeluid.play();
    checkOfKlaar();
    }
knop_turtleneck.addEventListener('click', toonturtleneck);


//VOLTOOIINGSCHECK//
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
//TIMER//
//telt omhoog tijdens maken mannetje: stopt als je klaar bent en displayt die tijd!//
//met hulp van bron: chatgpt, "Can you provide me the steps to build a JavaScript timer, counting up from zero, with four digits, that stops when the boolean "haroldKlaar" is changed to true, and changes the text content of "ZOVEELTIJD" to the amount of time passed?"
    let startTijd = 0;
    let timerInterval;
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
        document.getElementById('timer').textContent = formattedTime;
        document.getElementById('TimerTijd').textContent = "Goed werk! Je hebt de docent van vandaag gevonden in " + formattedTime + ".";
    }
    function padNumber(number) {
        return (number < 10 ? '0' : '') + number;
        //hierdoor wordt de tijd gedisplayed als b.v. 01:00 ipv
    }
    startTimer();