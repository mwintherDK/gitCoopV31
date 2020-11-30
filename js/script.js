// Eriks js

// Erik slut her

// Nicolaj js

const articleFunction = () =>{
    const imagesLink = [
        "img/find_butik.png",
        "img/facebook.png",
        "img/club_bs.png"
    ]
    const section = document.querySelector(".featured");
    imagesLink.forEach((img) =>{
        const figure = document.createElement("figure");
        figure.classList.add("imageFigure");
        const image = document.createElement("img");
        image.src = img;
        console.log(img);
        figure.appendChild(image);
        section.appendChild(figure);
    })
}
articleFunction();
// Nicolaj slut her
