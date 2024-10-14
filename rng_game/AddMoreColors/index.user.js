// ==UserScript==
//
// @name            AddMoreColors
// @namespace       Violentmonkey Scripts
// @match           https://g.wildwest.gg/g/69ea5b13-c66a-4cfa-9714-f120ae6810b9*
// @grant           none
// @version         1.0
// @author          GameRoMan
// @description     Adds more colors to RNG Game
// @downloadURL     https://github.com/GameRoMan/wildwest/raw/refs/heads/main/rng_game/AddMoreColors/index.user.js
//
// ==/UserScript==


(function() {
    const customColorSchemes = {
        white: {
            primary: '#ffffff',
            primaryTransparent: 'rgba(255, 255, 255, 0.3)',
            secondary: '#333333',
            background: '#222222',
            text: '#ffffff'
        }
    };

    const colorSchemeSelect = document.getElementById('color-scheme-select');

    function AddColor(text, value) {
        const option = document.createElement("option");
        option.textContent = text;
        option.value = value;
        colorSchemeSelect.appendChild(option);
    }

    AddColor('White', 'white');

    colorSchemeSelect.addEventListener('change', (e) => {
        const color = e.target.value;
        if (color in customColorSchemes) ApplyCustomColor(color);
    });

    function ApplyCustomColor(scheme) {
      const root = document.documentElement;
      root.style.setProperty('--primary-color', customColorSchemes[scheme].primary);
      root.style.setProperty('--primary-color-transparent', customColorSchemes[scheme].primaryTransparent);
      root.style.setProperty('--secondary-color', customColorSchemes[scheme].secondary);
      root.style.setProperty('--background-color', customColorSchemes[scheme].background);
      root.style.setProperty('--text-color', customColorSchemes[scheme].text);
    }
})();
