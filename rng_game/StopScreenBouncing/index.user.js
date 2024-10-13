// ==UserScript==
//
// @name            StopScreenBouncing
// @namespace       Violentmonkey Scripts
// @match           https://g.wildwest.gg/g/69ea5b13-c66a-4cfa-9714-f120ae6810b9*
// @grant           none
// @version         1.0
// @author          GameRoMan
// @description     Stop screen bouncing in RNG Game
// @downloadURL     https://github.com/GameRoMan/wildwest/raw/refs/heads/main/rng_game/StopScreenBouncing/index.user.js
//
// ==/UserScript==


(function() {
    const resultElement = document.getElementById('result');
    resultElement.style.height = '180px';
})();
