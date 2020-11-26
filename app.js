// Code for changing the theme of the website
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    // Change the theme of the website
    document.body.classList.toggle("dark")
})
// End of code


function followMeMouseOver() {
    var socialMediaIcons = document.getElementById('social');
    socialMediaIcons.style.visibility = "visible";
    var follow = document.getElementById('follow');
    follow.style.visibility = "hidden";

}

function socialMouseOut() {
    var socialMediaIcons = document.getElementById('social')
    socialMediaIcons.style.visibility = "hidden"
    var follow = document.getElementById('follow')
    follow.style.visibility = "visible"

}

function socialMouseOver() {
    var socialMediaIcons = document.getElementById('social');
    socialMediaIcons.style.visibility = "visible";
    var follow = document.getElementById('follow');
    follow.style.visibility = "hidden";

}

var light = true;
function themeLight() {
    if (light === false) {
        document.getElementById("light").style.backgroundColor = "#FCFCFC";
        document.getElementById("light").style.color = "#777777";
    }

    else {
        document.getElementById("light").style.backgroundColor = "#030307";
        document.getElementById("light").style.color = "#C9D0FA";
    }
    light = false;
}

