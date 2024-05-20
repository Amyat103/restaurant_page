import { createHomepage } from "./homepage";


window.onload = (event) => {
    const mainDiv = document.getElementById("content");

    const homepageDiv = createHomepage();
    mainDiv.appendChild(homepageDiv);

}