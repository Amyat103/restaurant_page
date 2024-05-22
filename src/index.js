import { createHomepage } from "./homepage";
import { aboutPage } from "./about";
import './index.css';

window.onload = (event) => {
    const mainDiv = document.getElementById("content");
    mainDiv.classList.add('main-div');

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.setAttribute("id", "homeButton");
    mainDiv.appendChild(homeButton);

    const aboutButton = document.createElement("button");
    aboutButton.textContent = "About"
    aboutButton.setAttribute("id", "aboutButton");
    mainDiv.appendChild(aboutButton);

    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("id", "contentDiv");
    mainDiv.appendChild(contentDiv);


    // default at home
    const homepageDiv = createHomepage();
    contentDiv.appendChild(homepageDiv);

    homeButton.addEventListener("click", (e) => {
        contentDiv.innerHTML = "";
        const homepageDiv = createHomepage();
        contentDiv.appendChild(homepageDiv);
    })

    aboutButton.addEventListener("click", (e) => {
        contentDiv.innerHTML = "";
        const aboutDiv = aboutPage();
        contentDiv.appendChild(aboutDiv);
    })

}
