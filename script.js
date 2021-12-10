/*
Author: Westin King
File Name: script.js
Date: 12/10/2021
*/

//Hamburger Menu Function

function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}
