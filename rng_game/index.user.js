// ==UserScript==
//
// @name            RNG game mod
// @namespace       Violentmonkey Scripts
// @match           https://g.wildwest.gg/g/69ea5b13-c66a-4cfa-9714-f120ae6810b9*
// @grant           none
// @version         1.0
// @author          GameRoMan
// @description     A script that adds various useful features to RNG game
// @downloadURL		https://github.com/GameRoMan/wildwest/edit/main/rng_game/index.user.js
//
// ==/UserScript==


(function() {
    window.alert = function() {};
    window.confirm = function() { return true; };
    window.prompt = function() { return ''; };


    const resultElement = document.getElementById('result');
    resultElement.style.height = '180px';


    const lowDetailModeCheckbox = document.getElementById('low-detail-mode-checkbox');
    lowDetailModeCheckbox.checked = true;
    document.body.classList.add('low-detail-mode');


    function saveLowDetailMode(save_data) {
        const saveLowDetailModeEvent = {
            type: 'RESPONSE_LOAD_GAME_EVENT',
            save_data: {
                ...save_data,
                lowDetailMode: true,
            }
        };

        window.postMessage(saveLowDetailModeEvent, '*');
    }


    window.addEventListener('message', (event) => {
        if (event.origin.includes('g.')) return;
        if (event.data.type !== 'RESPONSE_LOAD_GAME_EVENT') return;

        saveLowDetailMode(event.data.save_data);
    });

})();
