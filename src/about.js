

export function aboutPage() {
    const aboutDiv = document.createElement("div");
    // title
    const title = document.createElement("h1");
    title.textContent = "About";
    aboutDiv.appendChild(title);

    
    const aboutDes = document.createElement("p");
    aboutDes.textContent = "Started in 2024, this is the best seafood boil in the states";
    aboutDiv.appendChild(aboutDes);


    return aboutDiv;
}