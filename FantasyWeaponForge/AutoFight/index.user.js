// ==UserScript==
//
// @name            Auto Fight
// @namespace       Violentmonkey Scripts
// @match           https://g.wildwest.gg/g/dc062bdc-d664-46e2-9cf9-09f8d135fe8d*
// @grant           none
// @version         1.0
// @author          GameRoMan
// @description     Auto Fight for Fantasy Weapon Forge
//
// ==/UserScript==


(function() {
    document.onkeypress = function(event) {
        if (event.key === 'u')  document.querySelector('.upgrade-button').click(); // Press U to upgarde your Weapon
        if (event.key === 'f')  document.getElementById('battleButton').click(); // Press F to Fight
    }
})();
