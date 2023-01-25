const container = document.createElement('section');
container.classList.add(
  'container-fluid',
  'featured-speakers',
  'text-dark',
  'bg-white',
);

const row1 = document.createElement('div');
row1.classList.add('row', 'pt-3', 'mb-5');
const col1 = document.createElement('div');
col1.classList.add('col-12');
const h3 = document.createElement('h3');
h3.classList.add('text-center', 'section-title');
h3.textContent = 'Featured speakers';
const hr = document.createElement('hr');
hr.classList.add('hr-title');

col1.appendChild(h3);
col1.appendChild(hr);
row1.appendChild(col1);
container.appendChild(row1);

const row2 = document.createElement('div');
row2.classList.add('row', 'speakers');
const col2 = document.createElement('div');
col2.classList.add('col-12', 'col-md-6');
const row3 = document.createElement('div');
row3.classList.add('row', 'mb-5', 'p-4', 'bg-white');
const col3 = document.createElement('div');
col3.classList.add('col-3', 'speaker-block', 'pr-0', 'pl-0');
const img = document.createElement('img');
img.classList.add('img-fluid', 'rounded', 'speaker-avatar');
img.src = './assets/images/davidcomics.jpg';
img.alt = 'Speaker';
col3.appendChild(img);

const col4 = document.createElement('div');
col4.classList.add('col-9', 'speaker-block', 'pr-0', 'pl-4');
const h3Speaker = document.createElement('h3');
h3Speaker.classList.add('mb-1', 'section-title', 'font-weight-bold');
h3Speaker.textContent = 'David YAO';
const p1 = document.createElement('p');
p1.classList.add('red', 'font-italic');
p1.textContent = 'Full Stack Web Developer';
const hrSpeaker = document.createElement('hr');
hrSpeaker.classList.add('hr-speakers', 'ml-0', 'mb-3');
const p2 = document.createElement('p');
p2.textContent = '3 years of experience as Software Developer in Laravel, Symfony and ReactJS. Looking for new opportunities';

col4.appendChild(h3Speaker);
col4.appendChild(p1);
col4.appendChild(hrSpeaker);
col4.appendChild(p2);

row3.appendChild(col3);
row3.appendChild(col4);
col2.appendChild(row3);
row2.appendChild(col2);
container.appendChild(row2);

document.body.appendChild(container);
const col5 = document.createElement('div');
col5.classList.add('col-12', 'col-md-6');
const row4 = document.createElement('div');
row4.classList.add('row', 'mb-5', 'p-4', 'bg-white');
const col6 = document.createElement('div');
col6.classList.add('col-3', 'speaker-block', 'pr-0', 'pl-0');
const img2 = document.createElement('img');
img2.classList.add('img-fluid', 'rounded', 'speaker-avatar');
img2.src = './assets/images/author1.jpg';
img2.alt = 'Speaker';
col6.appendChild(img2);

const col7 = document.createElement('div');
col7.classList.add('col-9', 'speaker-block', 'pr-0', 'pl-4');
const h3Speaker2 = document.createElement('h3');
h3Speaker2.classList.add('mb-1', 'section-title', 'font-weight-bold');
h3Speaker2.textContent = 'David YAO';
const p3 = document.createElement('p');
p3.classList.add('red', 'font-italic');
p3.textContent = 'Full Stack Web Developer';
const hrSpeaker2 = document.createElement('hr');
hrSpeaker2.classList.add('hr-speakers', 'ml-0', 'mb-3');
const p4 = document.createElement('p');
p4.textContent = '3 years of experience as Software Developer in Laravel, Symfony and ReactJS. Looking for new opportunities';

col7.appendChild(h3Speaker2);
col7.appendChild(p3);
col7.appendChild(hrSpeaker2);
col7.appendChild(p4);

row4.appendChild(col6);
row4.appendChild(col7);
col5.appendChild(row4);
row2.appendChild(col5);

const col8 = document.createElement('div');
col8.classList.add('col-12', 'col-md-6', 'd-none', 'd-md-block');
const row5 = document.createElement('div');
row5.classList.add('row', 'mb-5', 'p-4', 'bg-white');
const col9 = document.createElement('div');
col9.classList.add('col-3', 'speaker-block', 'pr-0', 'pl-0');
const img3 = document.createElement('img');
img3.classList.add('img-fluid', 'rounded', 'speaker-avatar');
img3.src = './assets/images/author4.jpg';
img3.alt = 'Speaker';
col9.appendChild(img3);

const col10 = document.createElement('div');
col10.classList.add('col-9', 'speaker-block', 'pr-0', 'pl-4');
const h3Speaker3 = document.createElement('h3');
h3Speaker3.classList.add('mb-1', 'section-title', 'font-weight-bold');
h3Speaker3.textContent = 'David YAO';
const p5 = document.createElement('p');
p5.classList.add('red', 'font-italic');
p5.textContent = 'Full Stack Web Developer';
const hrSpeaker3 = document.createElement('hr');
hrSpeaker3.classList.add('hr-speakers', 'ml-0', 'mb-3');
const p6 = document.createElement('p');
p6.textContent = '3 years of experience as Software Developer in Laravel, Symfony and ReactJS. Looking for new opportunities';

col10.appendChild(h3Speaker3);
col10.appendChild(p5);
col10.appendChild(hrSpeaker3);
col10.appendChild(p6);

row5.appendChild(col9);
row5.appendChild(col10);
col8.appendChild(row5);
row2.appendChild(col8);

const col11 = document.createElement('div');
col11.classList.add('col-12', 'col-md-6', 'd-none', 'd-md-block');
const row6 = document.createElement('div');
row6.classList.add('row', 'mb-5', 'p-4', 'bg-white');
const col12 = document.createElement('div');
col12.classList.add('col-3', 'speaker-block', 'pr-0', 'pl-0');
const img4 = document.createElement('img');
img4.classList.add('img-fluid', 'rounded', 'speaker-avatar');
img4.src = './assets/images/author2.png';
img4.alt = 'Speaker';
col12.appendChild(img4);

const col13 = document.createElement('div');
col13.classList.add('col-9', 'speaker-block', 'pr-0', 'pl-4');
const h3Speaker4 = document.createElement('h3');
h3Speaker4.classList.add('mb-1', 'section-title', 'font-weight-bold');
h3Speaker4.textContent = 'David YAO';
const p7 = document.createElement('p');
p7.classList.add('red', 'font-italic');
p7.textContent = 'Full Stack Web Developer';
const hrSpeaker4 = document.createElement('hr');
hrSpeaker4.classList.add('hr-speakers', 'ml-0', 'mb-3');
const p8 = document.createElement('p');
p8.textContent = '3 years of experience as Software Developer in Laravel, Symfony and ReactJS. Looking for new opportunities';

col13.appendChild(h3Speaker4);
col13.appendChild(p7);
col13.appendChild(hrSpeaker4);
col13.appendChild(p8);

row6.appendChild(col12);
row6.appendChild(col13);
col11.appendChild(row6);
row2.appendChild(col11);
container.appendChild(row2);

document.body.appendChild(container);
