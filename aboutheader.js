let section = document.createElement("section");
section.classList.add("container-fluid", "featured-speakers", "text-dark", "bg-white", "border-bottom");

let row1 = document.createElement("div");
row1.classList.add("row", "pt-3", "mb-5");

let col1 = document.createElement("div");
col1.classList.add("col-12");

let h3 = document.createElement("h3");
h3.classList.add("text-center", "section-title");
h3.innerText = "See the past Aruba Ruby Global Summits";

let hr = document.createElement("hr");
hr.classList.add("hr-title");

col1.appendChild(h3);
col1.appendChild(hr);
row1.appendChild(col1);
section.appendChild(row1);

let row2 = document.createElement("div");
row2.classList.add("row");

let col2 = document.createElement("div");
col2.classList.add("col-12");

let p1 = document.createElement("p");
p1.classList.add("text-center");
p1.innerText = "Take a look at the past two Aruba Ruby Global Summits ";

col2.appendChild(p1);
row2.appendChild(col2);
section.appendChild(row2);

let row3 = document.createElement("div");
row3.classList.add("row", "previous", "p-4", "justify-content-center");

let col3 = document.createElement("div");
col3.classList.add("col-12", "col-md-5", "mt-4", "text-center", "text-white", "p-5");

let h3_1 = document.createElement("h3");
h3_1.classList.add("font-weight-bold", "mb-3");
h3_1.innerText = "2023";

let p2 = document.createElement("p");
p2.classList.add("font-weight-bold", "text-white");
p2.innerText = "Aruba Ruby Conference Global Summit 2023 ";

col3.appendChild(h3_1);
col3.appendChild(p2);
row3.appendChild(col3);

let col4 = document.createElement("div");
col4.classList.add("col-12", "col-md-5", "ml-md-2", "mt-4", "text-center", "text-white", "p-5");

let h3_2 = document.createElement("h3");
h3_2.classList.add("font-weight-bold", "mb-3");
h3_2.innerText = "2023";

let p3 = document.createElement("p");
p3.classList.add("font-weight-bold", "text-white");
p3.innerText = "Aruba Ruby Conference Global Summit 2023";

col4.appendChild(h3_2);
col4.appendChild(p3);
row3.appendChild(col4);

section.appendChild(row3);

// Append the section to the desired parent element
document.querySelector("body").appendChild(section);
