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
var backimage;
var cookie;
var AmountCookies = 0;

//var achtergrond;

var spelerX = 0; // x-positie van speler
var spelerY = 100;

var D = 68;
 // y-positie van speler

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var klikken = function() {
  // speler
//  if (MouseEvent ) {
//     AmountCookies = AmountCookies + 1;
//   }; 

  // vijand
 
  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */


/**
 * Tekent spelscherm
 */



var tekenAlles = function() {
  // achtergrond
  image(backimage, 0, 0, 1280, 720);
  // vijand

  // kogel

  // speler
 
 



  // punten en health
 
};

var verwerkBotsing = function() {
  // botsing speler tegen vijand
  image(cookie, 40, 100, 300, 300);
  line(405, 0, 405, 720,);
  strokeWeight(10);
  text("Cookie's Eaten;", 40, 100)
  text(AmountCookies, 40, 150)
  textSize(46);
  // botsing kogel tegen vijand

  // update punten en health

};
/**
 * return true als het gameover is
 * anders return false
 */
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
    klikken();
    verwerkBotsing();
    
    
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
};
