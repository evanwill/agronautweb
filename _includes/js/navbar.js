/* scripts v2,simple = support for old IE browsers */
/* open/toggle small nav */
function navToggle() {
    document.getElementById("navdropdown").style.display = ( document.getElementById("navdropdown").style.display == "block") ? "none" : "block";
}
/* open/toggle jump years */
function yearsToggle() {
    document.getElementById("yearsnav").style.display = ( document.getElementById("yearsnav").style.display == "block") ? "none" : "block";
}
/* all collections toggle */
function collectionsToggle() {
    document.getElementById("collectionsnav").style.display = ( document.getElementById("collectionsnav").style.display == "block") ? "none" : "block";
}

/* add onclick functions to the elements, old school way = easy cross-browser compatibility */
/* open + close all collections nav */
document.getElementById("opencollections").onclick = function() { collectionsToggle(); };
document.getElementById("closecollections").onclick = function () { collectionsToggle(); };
/* open + close years nav */
document.getElementById("openyears").onclick = function () { yearsToggle(); };
document.getElementById("closeyears").onclick = function() { yearsToggle(); };
/* open + close small nav box */
document.getElementById("navopen").onclick = function () { navToggle(); };