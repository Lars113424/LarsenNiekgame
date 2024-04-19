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
var magnetron;

//cookie variabelen 
let AmountCookies = 0;
let CPS = 0;
let AmountCookiesShow = 0;

//prijs variabelen
const muisBasePrice = 10;
var muisPrice = 10;
var muisAmount = 0;

const magnetronBasePrice = 200;
var magnetronPrice = 200;
var magnetronAmount = 0;


//cookies per seconde
function addCookiesPerSecond() {
  AmountCookies = AmountCookies + 0.5 * CPS; 
}
//speelt functie elke seconde af
 setInterval(addCookiesPerSecond, 500);

//cookie click functie




var mouseClicked = function() {
  if (mouseX > 110 && mouseX < 280 && mouseY > 175 && mouseY < 340) {
      AmountCookies = AmountCookies + 1;
      //geeft een cookie per click
  }
     //Muis gebouw
  if (mouseX > 410 && mouseX < 925 && mouseY > 145 && mouseY < 280 && AmountCookies >= muisPrice) {

      CPS = CPS + 0.5;
      AmountCookies = AmountCookies - muisPrice;
      muisAmount += 1;
      muisPrice = muisBasePrice * 1.15 ** muisAmount;
      
      

  }
     //magnetron gebouw
  if (mouseX > 410 && mouseX < 925 && mouseY > 280 && mouseY < 425 && AmountCookies >= magnetronPrice) {

    CPS = CPS + 10;
    AmountCookies = AmountCookies - magnetronPrice;
    magnetronAmount += 1;
    magnetronPrice = magnetronBasePrice * 1.15 ** magnetronAmount;
   
  
  }
  
};

var tekenAlles = function() {
  // achtergrond
  image(backimage, 0, 0, 1280, 720);


 
 
};

var design = function() {
  //cookie
  image(cookie, 40, 100, 300, 300);
  let AmountCookiesShow = Math.round(AmountCookies)
  //lines
  strokeWeight(10);
  line(405, 0, 405, 720,);
  line(930, 0, 930, 720,);
  
  strokeWeight(5);
  line(1280, 140, 0, 140);
  
  //locatie test (later weghalen)
  textSize(50);
  text(mouseX, 80, 620);
  text(mouseY, 80, 660);
 

  //cookie text
  textSize(46);
  text("Cookie's Munched;", 10, 50);
  text(AmountCookiesShow, 190, 85);
  textSize(25);
  text("Cps; " + CPS, 160, 120);
  
  
 //gebouwen
  image(BuildingButton, 410, 50, 514, 350);
  image(muis, 420, 120, 200, 200);
  textSize(30);
  text("Muis; " + Math.round(muisPrice) + " cookies", 560, 210);
  textSize(20);
  text("cookie's per second; 0.5", 561, 240)

  image(BuildingButton, 410, 190, 514, 350);
  image(magnetron, 450, 310, 100, 120)
  textSize(30);
  text("Magnetron; " + Math.round(magnetronPrice) + " cookies", 560, 350);
  textSize(20);
  text("cookie's per second; 10", 561, 380)
  

 //upgrades

};



function preload() {
  backimage = loadImage('afbeeldingen/background.png');
  cookie = loadImage('afbeeldingen/cookie.png');
  BuildingButton = loadImage('afbeeldingen/button.png');
  muis = loadImage('afbeeldingen/Muis.png');
  magnetron = loadImage('afbeeldingen/magnetron.png')
  
  //achtergrond = loadImage ('achtergrond.png');

};

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);


  
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

  }
};
