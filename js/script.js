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

// Nicolaj slut her
