'use strict';

const handleLoad = () => {
    let style1 = document.getElementById('style1button');
    let style2 = document.getElementById('style2button');
    style1.addEventListener('click', handleClick);
    style2.addEventListener('click', handleClick);
};

const handleClick = (event) => {
    if(event.target.value === "style1") {
        document.getElementById("stylesheet").href = "style.css";
        // should only change article style 
        // currently still referring to the whole document
    } 
    else {
        document.getElementById("stylesheet").href = "dark-mode.css";
        // should also only change article style
        // also still referring to the whole document
    }
};

window.addEventListener('load', handleLoad);