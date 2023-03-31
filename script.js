window.onload = function(){
    setTimeout(function(){
      document.getElementById("fadein").remove();
    },1000);
};


function toggleTheme() {
 if (localStorage.getItem('theme') === 'theme-dark'){
    setTheme('theme-light');
    document.body.style.backgroundImage = "url(\"background-light.svg\")";
} else {
    setTheme('theme-dark');
    document.body.style.backgroundImage = "url(\"background-dark.svg\")";
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
} else {
    setTheme('theme-light');
    document.body.style.backgroundImage = "url(\"background-light.svg\")";
 }
})();


// const techStackElem = document.querySelector(".techStack");
// const techStackItemsElem = document.querySelectorAll(".techBox");
// console.log("techStackElem", techStackElem);
// console.log("techStackElem.children", techStackElem.children);
// console.log("techStackItemsElem", techStackItemsElem);
// console.log("techStackElem.children == techStackItemsElem", techStackElem.children == techStackItemsElem);

// for(let item of techStackItemsElem) {
//     item.animate(
//         [
//             { transform: "translateY(0%)" },
//             { transform: "translateY(-100%)" },
//             { transform: "translateY(0%)" },
//         ], 1000);
//     console.log("item", item.getAnimations());
// }

        
fetch("projects.json")
    .then(response => response.json())
    .then(data => { 
        console.log("projects: ", data);
        data.map(item => {
            const project = `
                <section class="projectBox clayit">
                    <figure class="clayPic">
                        <img src="${item.image}" />
                    </figure>
                    <h2>${item.title}</h2>
                    <p>${item.text}</p>
                    <ul>
                        <li><a href="${item.livePage}">Se sidan live</a></li>
                        <li><a href="${item.githubPage}">Github repo</a></li>
                    </ul>
                </section>`;
            
            document.querySelector(".wrapper").innerHTML += project;
        });
    });