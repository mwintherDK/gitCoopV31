// Eriks js
const navLinks = {
  brand: "brand.html",
  om_bs_menswear: "om_bs_menswear.html",
  find_butikken: "find_butikken.html",
  club_bs: "club_bs.html",
  google: "https://www.google.com/",
};
let nav = document.querySelector("nav");
let ul = document.createElement("ul");
for (key in navLinks) {
  let a = document.createElement("a");
  let li = document.createElement("li");
  a.setAttribute("href", navLinks[key]);
  a.innerHTML = key.toString().toUpperCase().replaceAll("_", " ");
  li.appendChild(a);
  ul.appendChild(li);
}
nav.appendChild(ul);
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
