window.onload = function(){
    setTimeout(function(){
      document.getElementById("fadein").remove();
    },1000);
};


function toggleTheme() {
 if (localStorage.getItem('theme') === 'theme-dark'){
    setTheme('theme-light');
    document.body.style.backgroundImage = "url(\"background-light.svg\")";
    document.querySelector("#themeButton").innerHTML = "Turn off the light";
} else {
    setTheme('theme-dark');
    document.body.style.backgroundImage = "url(\"background-dark.svg\")";
    document.querySelector("#themeButton").innerHTML = "Turn on the light";
 }
}

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

(function () {
 if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
    document.body.style.backgroundImage = "url(\"background-dark.svg\")";
    document.querySelector("#themeButton").innerHTML = "Turn on the light";
} else {
    setTheme('theme-light');
    document.body.style.backgroundImage = "url(\"background-light.svg\")";
    document.querySelector("#themeButton").innerHTML = "Turn off the light";
 }
})();