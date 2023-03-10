const navbar = document.createElement('section');
navbar.classList.add(
  'container-fluid',
  'jumbotron',
  'slider',
  'mb-0',
  'pl-0',
  'pr-0',
  'text-center',
);

const row = document.createElement('div');
row.classList.add('row', 'text-center');
navbar.appendChild(row);

const smallScreenBars = document.createElement('div');
smallScreenBars.classList.add(
  'pt-0',
  'nav-small',
  'd-block',
  'd-md-none',
  'navbar-toggler',
);
smallScreenBars.setAttribute('data-toggle', 'collapse');
smallScreenBars.setAttribute('data-target', '#navbarSupportedContent1');

const icon = document.createElement('i');
icon.classList.add('fas', 'fa-bars');
smallScreenBars.appendChild(icon);
row.appendChild(smallScreenBars);

const collapsibleContent = document.createElement('div');
collapsibleContent.classList.add('collapse', 'navbar-collapse');
collapsibleContent.setAttribute('id', 'navbarSupportedContent1');
row.appendChild(collapsibleContent);

const links = document.createElement('ul');
links.classList.add('navbar-nav', 'mr-auto');
collapsibleContent.appendChild(links);

const linkNames = [
  'Home',
  'About',
  'Tickets',
  'Join',
  'Sponsor',
  'News',
  'RoR Campaign',
];
const linkUrls = [
  './index.html',
  './about.html',
  './tickets.html',
  '#',
  '#',
  '#',
  '#',
];

for (let i = 0; i < linkNames.length; i += 1) {
  const listItem = document.createElement('li');
  listItem.classList.add('nav-item', 'pr-4', 'pl-4');
  links.appendChild(listItem);

  const link = document.createElement('a');
  link.classList.add('nav-link');
  link.setAttribute('href', linkUrls[i]);
  link.textContent = linkNames[i];
  if (linkNames[i] === 'Home') link.classList.add('red');
  if (linkNames[i] === 'Dashboard') link.classList.add('red', 'campaign');
  listItem.appendChild(link);
}

const welcomeText = document.createElement('div');
welcomeText.classList.add('welcome-text', 'col-12', 'pt-5', 'mt-5');
row.appendChild(welcomeText);

const h3 = document.createElement('h3');
h3.classList.add('text-left', 'red', 'pl-25');
h3.textContent = 'Hello World!';
welcomeText.appendChild(h3);

const h1 = document.createElement('h1');
h1.classList.add(
  'image-effect',
  'text-uppercase',
  'text-left',
  'font-weight-bold',
  'red',
  'pl-25',
);
h1.style.whiteSpace = 'pre-line';
h1.textContent = 'Aruba Ruby\nConference 2023';
welcomeText.appendChild(h1);

const description = document.createElement('div');
description.classList.add('col-12', 'mt-4', 'mb-4', 'pl-25');
row.appendChild(description);

const p = document.createElement('p');
p.classList.add('p-4', 'welcome-description');
p.textContent = ' Aruba Ruby Global Summit is an annual gathering for all who ar  passionate about Ruby and Ruby on Rails. The Aruba based conference has served the Ruby community since 2008.';
description.appendChild(p);

const eventDate = document.createElement('div');
eventDate.classList.add('event-date', 'col-12', 'pl-10');
row.appendChild(eventDate);

const h2 = document.createElement('h2');
h2.classList.add('font-weight-bold', 'mb-2');

h2.textContent = '2023.01.04(THU) ~ 05(FRI)';
eventDate.appendChild(h2);

const p2 = document.createElement('p');
p2.textContent = '@ Cas di Cultura, Oranjestad, Aruba';
eventDate.appendChild(p2);

document.body.appendChild(navbar);
