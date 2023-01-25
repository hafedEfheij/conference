const header = document.createElement("header");

const nav1 = document.createElement("nav");
nav1.classList.add(
  "navbar",
  "navbar-expand-sm",
  "bg-dark-custom",
  "text-white",
  "pt-0",
  "pb-0"
);

const ul1 = document.createElement("ul");
ul1.classList.add("navbar-nav", "ml-auto");

const li1 = document.createElement("li");
li1.classList.add("nav-item");
const a1 = document.createElement("a");
a1.classList.add("nav-link");
a1.setAttribute("href", "#");
const i1 = document.createElement("i");
i1.classList.add("fab", "fa-facebook-f");
a1.appendChild(i1);
li1.appendChild(a1);
ul1.appendChild(li1);

const li2 = document.createElement("li");
li2.classList.add("nav-item");
const a2 = document.createElement("a");
a2.classList.add("nav-link");
a2.setAttribute("href", "#");
const i2 = document.createElement("i");
i2.classList.add("fab", "fa-twitter");
a2.appendChild(i2);
li2.appendChild(a2);
ul1.appendChild(li2);

const li3 = document.createElement("li");
li3.classList.add("nav-item");
const a3 = document.createElement("a");
a3.classList.add("nav-link");
a3.setAttribute("href", "#");
a3.textContent = "English";
li3.appendChild(a3);
ul1.appendChild(li3);

const li4 = document.createElement("li");
li4.classList.add("nav-item");
const a4 = document.createElement("a");
a4.classList.add("nav-link");
a4.setAttribute("href", "#");
a4.textContent = "My Page";
li4.appendChild(a4);
ul1.appendChild(li4);

const li5 = document.createElement("li");
li5.classList.add("nav-item");
const a5 = document.createElement("a");
a5.classList.add("nav-link");
a5.setAttribute("href", "#");
a5.textContent = "Logout";
li5.appendChild(a5);
ul1.appendChild(li5);

nav1.appendChild(ul1);
header.appendChild(nav1);

const nav2 = document.createElement("nav");
nav2.classList.add(
  "navbar",
  "navbar-expand-sm",
  "bg-white",
  "text-dark",
  "pt-0",
  "pb-0"
);

const a6 = document.createElement("a");
a6.classList.add("navbar-brand", "p-0", "m-0");
a6.setAttribute("href", "./index.html");

const figure = document.createElement("figure");
figure.classList.add("logo", "m-0");
const img = document.createElement("img");
img.classList.add("img-fluid");
img.setAttribute("src", "./images/logo.png");
img.setAttribute("alt", "Logo");
figure.appendChild(img);
a6.appendChild(figure);
nav2.appendChild(a6);

const ul2 = document.createElement("ul");
ul2.classList.add("navbar-nav", "ml-auto");

const li6 = document.createElement("li");
li6.classList.add("nav-item", "pr-4", "pl-4");
const a7 = document.createElement("a");
a7.classList.add("nav-link");
a7.setAttribute("href", "./index.html");
a7.textContent = "Home";
li6.appendChild(a7);
ul2.appendChild(li6);

const li7 = document.createElement("li");
li7.classList.add("nav-item", "pr-4", "pl-4");
const a8 = document.createElement("a");
a8.classList.add("nav-link", "red");
a8.setAttribute("href", "./about.html");
a8.textContent = "About";
li7.appendChild(a8);
ul2.appendChild(li7);

const li8 = document.createElement("li");
li8.classList.add("nav-item", "pr-4", "pl-4");
const a9 = document.createElement("a");
a9.classList.add("nav-link");
a9.setAttribute("href", "#");
a9.textContent = "Tickets";
li8.appendChild(a9);
ul2.appendChild(li8);

const li9 = document.createElement("li");
li9.classList.add("nav-item", "pr-4", "pl-4");
const a10 = document.createElement("a");
a10.classList.add("nav-link");
a10.setAttribute("href", "#");
a10.textContent = "Join";
li9.appendChild(a10);
ul2.appendChild(li9);

const li10 = document.createElement("li");
li10.classList.add("nav-item", "pr-4", "pl-4");
const a11 = document.createElement("a");
a11.classList.add("nav-link");
a11.setAttribute("href", "#");
a11.textContent = "Sponsor";
li10.appendChild(a11);
ul2.appendChild(li10);

const li11 = document.createElement("li");
li11.classList.add("nav-item", "pr-4", "pl-4");
const a12 = document.createElement("a");
a12.classList.add("nav-link");
a12.setAttribute("href", "#");
a12.textContent = "News";
li11.appendChild(a12);
ul2.appendChild(li11);

const li12 = document.createElement("li");
li12.classList.add("nav-item", "pr-4", "pl-4", "red", "campaign");
const a13 = document.createElement("a");
a13.classList.add("nav-link");
a13.setAttribute("href", "#");
a13.textContent = "RoR Campaign";
li12.appendChild(a13);
ul2.appendChild(li12);

nav2.appendChild(ul2);
header.appendChild(nav2);

document.body.appendChild(header);


