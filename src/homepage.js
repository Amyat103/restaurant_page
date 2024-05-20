import homeImg from './homepage.jpg';


export function createHomepage() {
    const homepageDiv = document.createElement("div");
    // title
    const homeTitle = document.createElement("h1");
    homeTitle.textContent = "Zhou's Restaurant";
    homepageDiv.appendChild(homeTitle);
    // main image
    const homeImage = new Image(400, 250);
    homeImage.src = homeImg;
    homepageDiv.appendChild(homeImage);
    // description
    const homeDes = document.createElement("p");
    homeDes.textContent = "Started in 2024, this is the best seafood boil in the stats";
    homepageDiv.appendChild(homeDes);


    return homepageDiv;

}