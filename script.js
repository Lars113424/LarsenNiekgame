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
var BuildingButton = BuildingButton;
var muis;
var magnetron;
var clicker;

//cookie variabelen 
let AmountCookies = 500;
let CPS = 0;
let AmountCookiesShow = 0;
let AmountClicked = 200;
let ClickerMultiply =1;

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
      AmountCookies = AmountCookies + ClickerMultiply;
      //geeft een cookie per click
      AmountClicked++;
      textSize(20);

      // Maak een tekst element aan
      var floatingText = document.createElement("div");
      floatingText.textContent = "+" + ClickerMultiply;
      floatingText.style.position = "absolute";
      floatingText.style.color = "black";
      floatingText.style.fontSize = "20px";
      floatingText.style.left = mouseX + "px";
      floatingText.style.top = mouseY + "px";
      document.body.appendChild(floatingText);

      // Functie om het tekst element doorzichtiger te maken en omhoog te laten zweven
      function animateFloatingText() {
          var xPos = mouseX;
          var yPos = mouseY; // startpositie verticaal
          var transparency = 1.0; // startdoorzichtigheid

          // Functie voor animatie
          function animate() {
              // Verhoog de verticale positie
              yPos -= 1;
              xPos = mouseX
              // Verlaag de doorzichtigheid
              transparency -= 0.01;

              // Pas de positie en doorzichtigheid van het tekst element aan
              floatingText.style.top = yPos + "px";
              floatingText.style.opacity = transparency;

              // Stop de animatie als de doorzichtigheid nul wordt
              if (transparency <= 0) {
                  clearInterval(animationInterval);
                  // Verwijder het tekst element uit de DOM
                  document.body.removeChild(floatingText);
              }
          }

          // Start de animatie met een interval van 20 milliseconden
          var animationInterval = setInterval(animate, 20);
      }

      // Start de animatie wanneer de pagina geladen is
      animateFloatingText();
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

  if (mouseX > 1170 && mouseX < 1280 && mouseY > 140 && mouseY < 285 && AmountCookies >= 250) {

   ClickerMultiply = 2;
   AmountCookies = AmountCookies - 250;
   image(BuildingButton, -1170, -50, 110, 350);
    image(clicker, -1190, -175, 75, 75);

   
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
  fill(0, 0, 0)
  strokeWeight(10);
  line(405, 0, 405, 720,);
  line(1165, 0, 1165, 720,);
  
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

  if (AmountClicked >= 100 && ClickerMultiply != 2) {
    // Toon de afbeeldingen BuildingButton en Clicker
    image(BuildingButton, 1170, 50, 110, 350);
    image(clicker, 1190, 175, 75, 75);
} else {
    // Verberg de afbeeldingen BuildingButton en Clicker
    image(BuildingButton, -1170, -50, 110, 350);
    image(clicker, -1190, -175, 75, 75);
}

};



function preload() {
  backimage = loadImage('afbeeldingen/background.png');
  cookie = loadImage('afbeeldingen/cookie.png');
  BuildingButton = loadImage('afbeeldingen/button.png');
  muis = loadImage('afbeeldingen/Muis.png');
  magnetron = loadImage('afbeeldingen/magnetron.png');
  clicker = loadImage('afbeeldingen/clicker-upgrade.png')
  
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
