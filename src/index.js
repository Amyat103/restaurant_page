import homeImg from './homepage.jpg';



function createHomepage() {
    const homepageDiv = document.createElement("div");
    const homeTitle = document.createElement("h1");
    homeTitle.textContent = "Zhou's Restaurant";
    homepageDiv.appendChild(homeTitle);

    const homeImage = new Image(200, 100);
    homeImage.src = homeImg;
    homepageDiv.appendChild(homeImage);

    return homepageDiv;

}


window.onload = (event) => {
    

}