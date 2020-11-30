// Eriks js

// Erik slut her

// Nicolaj js

const articleFunction = () =>{
    const imagesLink = [
        "find_butik",
        "facebook",
        "club_bs"
    ]
    const section = document.querySelector(".featured");
    imagesLink.forEach((img) =>{
        const figure = document.createElement("figure");
        figure.classList.add("imageFigure");
        const image = document.createElement("img");
        image.src = `img/${img}.png`;
        console.log(img);
        figure.appendChild(image);
        section.appendChild(figure);
    })
}
articleFunction();
// Nicolaj slut her
