// ==UserScript==
//
// @name            DarkMode
// @namespace       Violentmonkey Scripts
// @match           https://g.wildwest.gg/g/d893cd5b-68e2-46a4-a23d-9efb65a198dd*
// @grant           none
// @version         1.0
// @author          GameRoMan
// @description     Dark Mode for Emoji Arena
// @downloadURL     https://github.com/GameRoMan/wildwest/raw/refs/heads/main/EmojiArena/DarkMode/index.user.js
//
// ==/UserScript==


(function() {
    function ApplyDarkMode() {
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#666666';

        document.querySelectorAll('.page').forEach(element => {
            element.style.backgroundColor = '#222222';
        });

        document.querySelectorAll('h2').forEach(element => {
            element.style.color  = '#666666';
        });

        document.querySelectorAll('button').forEach(button => {
            button.style.backgroundColor = '#222222';
        });

        document.querySelectorAll('.skill-btn').forEach(element => {
            element.style.backgroundColor = '#222222';
        });
    }

    ApplyDarkMode();
})();
