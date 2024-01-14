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


console.log(
    "%cWelcome to the console! \n I don't think you will find much here tbh. Well, except for the projects data that is being fetched. But you could always check out the Elemets or Network-tab or so if you'd like. \n I made this page without any framework, I thought it would make sense to keep it simple as it is a simple page.",
    "display: inline-block; background: linear-gradient(145deg, rgba(38,162,45,1) 0%, rgba(137,58,189,1) 100%); " +
    "padding: 12px 24px; " +
    "border: 1px solid black; border-radius: 12px; " +
    "font-size: 16px; line-height: 20px; font-family: monospace;"
);
console.log("psst, hey, hello 👋 I am actually working on a new portfolio, here is a sneakpeek: \n https://www.figma.com/file/qaPCOMTlYlzWctfOj3E9zE/Portfolio?type=design&node-id=524-2&mode=design");


        
fetch("data/projects.json")
    .then(response => response.json())
    .then(data => { 
        console.table(data);
        data.map(item => {
            const project = `
                <section class="projectBox clayit">
                    <figure class="clayPic">
                        <img src="${item.image}" />
                    </figure>
                    <h2>${item.title}</h2>
                    <p>${item.text}</p>
                    <ul>
                        <li><a href="${item.livePage}" class="link">Se sidan live</a></li>
                        <li><a href="${item.githubPage}" class="link">Github repo</a></li>
                    </ul>
                </section>`;
            
            document.querySelector(".wrapper").innerHTML += project;
        });
    });