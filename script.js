/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

//afbeeldingen
var backimage;
var cookie;
var BuildingButton;
var muis;

//cookie variabelen 
let AmountCookies = 0;
let CPS = 0;



//cookies per seconde
function addCookiesPerSecond() {
  AmountCookies = AmountCookies + CPS; 
  console.log("Aantal cookies: " + AmountCookies); // Uitvoer naar de console, je kunt dit naar wens aanpassen
}
//speelt functie elke seconde af
 setInterval(addCookiesPerSecond, 1000);

//cookie click functie




var mouseClicked = function() {
  if (mouseX > 110 && mouseX < 280 && mouseY > 175 && mouseY < 340) {
      AmountCookies = AmountCookies + 1;
      //geeft een cookie per click
  }

  if (mouseX > 410 && mouseX < 925 && mouseY > 145 && mouseY < 280) { 
    if (AmountCookies - 10 >= 0)  {
     CPS++;
      AmountCookies = AmountCookies - 10;
    }
  }
};

var tekenAlles = function() {
  // achtergrond
  image(backimage, 0, 0, 1280, 720);


 
 
};

var design = function() {
  //cookie
  image(cookie, 40, 100, 300, 300);
  //lines
  strokeWeight(10);
  line(405, 0, 405, 720,);
  line(930, 0, 930, 720,);
  
  strokeWeight(5);
  line(1280, 140, 0, 140);
  
  //locatie test (later weghalen)
  textSize(50);
  text(mouseX, 1000, 80);
  text(mouseY, 1000, 120);
 

  //cookie text
  textSize(46);
  text("Cookie's Eaten;", 40, 50);
  text(AmountCookies, 190, 85);
  
 //upgrades
  image(BuildingButton, 410, 50, 514, 350);
  image(muis, 420, 120, 200, 200);

 //upgrade text
  textSize(30);
  text("Mouse; 10 cookies", 560, 210);
  textSize(20);
  text("cookie's per second; 0.5", 561, 240)

 //gebouwen

};

var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function preload() {
  backimage = loadImage('afbeeldingen/background.png');
  cookie = loadImage('afbeeldingen/cookie.png');
  BuildingButton = loadImage('afbeeldingen/button.png');
  muis = loadImage('afbeeldingen/Muis.png');
  
  //achtergrond = loadImage ('achtergrond.png');

};

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  //background('blue');
  
};

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    tekenAlles();
    design();
    
    
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
};
