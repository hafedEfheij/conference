const mainProgram = document.createElement('section');
mainProgram.classList.add('container-fluid', 'main-program', 'text-white');

const mainProgramRow1 = document.createElement('div');
mainProgramRow1.classList.add('row', 'pt-3', 'mb-5');
mainProgram.appendChild(mainProgramRow1);

const mainProgramCol1 = document.createElement('div');
mainProgramCol1.classList.add('col-12');
mainProgramRow1.appendChild(mainProgramCol1);

const mainProgramTitle = document.createElement('h3');
mainProgramTitle.classList.add('text-center', 'section-title');
mainProgramTitle.textContent = 'Main program';
mainProgramCol1.appendChild(mainProgramTitle);

const mainProgramHR = document.createElement('hr');
mainProgramHR.classList.add('hr-title');
mainProgramCol1.appendChild(mainProgramHR);

const mainProgramRow2 = document.createElement('div');
mainProgramRow2.classList.add('row', 'program', 'justify-content-center');
mainProgram.appendChild(mainProgramRow2);

const programBlock1 = document.createElement('div');
programBlock1.classList.add(
  'col-12',
  'col-md-2',
  'pr-0',
  'pl-0',
  'program-block-parent',
);
mainProgramRow2.appendChild(programBlock1);

const programBlock1Div = document.createElement('div');
programBlock1Div.classList.add(
  'program-block',
  'text-center',
  'row',
  'mb-5',
  'p-4',
  'bg-dark-light-custom',
);
programBlock1.appendChild(programBlock1Div);

const programBlock1DivCol1 = document.createElement('div');
programBlock1DivCol1.classList.add(
  'col-sm-2',
  'col-12',
  'col-md-12',
  'pr-0',
  'pl-0',
);
programBlock1Div.appendChild(programBlock1DivCol1);

const programBlock1DivCol1Icon = document.createElement('i');
programBlock1DivCol1Icon.classList.add(
  'fas',
  'fa-chalkboard-teacher',
  'text-white',
);
programBlock1DivCol1.appendChild(programBlock1DivCol1Icon);

const programBlock1DivCol2 = document.createElement('div');
programBlock1DivCol2.classList.add(
  'col-sm-5',
  'col-12',
  'col-md-12',
  'pr-0',
  'pl-0',
  'red',
  'section-subtitle',
);
programBlock1DivCol2.textContent = 'Exhibition';
programBlock1Div.appendChild(programBlock1DivCol2);

const programBlock1DivCol3 = document.createElement('div');
programBlock1DivCol3.classList.add(
  'col-sm-5',
  'col-12',
  'col-md-12',
  'pr-0',
  'pl-0',
);
programBlock1DivCol3.textContent = 'Appreciate various creations using Ruby on Rails, organized by Microverse countries';
programBlock1Div.appendChild(programBlock1DivCol3);
const programBlock2 = document.createElement('div');
programBlock2.classList.add(
  'col-12',
  'col-md-2',
  'pr-0',
  'pl-0',
  'program-block-parent',
);
mainProgramRow2.appendChild(programBlock2);

const programBlock2Div = document.createElement('div');
programBlock2Div.classList.add(
  'program-block',
  'text-center',
  'row',
  'mb-5',
  'p-4',
  'bg-dark-light-custom',
);
programBlock2.appendChild(programBlock2Div);

const programBlock2DivCol1 = document.createElement('div');
programBlock2DivCol1.classList.add(
  'col-sm-2',
  'col-12',
  'col-md-12',
  'pr-0',
  'pl-0',
);
programBlock2Div.appendChild(programBlock2DivCol1);

const programBlock2DivCol1Icon = document.createElement('i');
programBlock2DivCol1Icon.classList.add(
  'fas',
  'fa-chalkboard-teacher',
  'text-white',
);
programBlock2DivCol1.appendChild(programBlock2DivCol1Icon);

const programBlock2DivCol2 = document.createElement('div');
programBlock2DivCol2.classList.add(
  'col-sm-5',
  'col-12',
  'col-md-12',
  'pr-0',
  'pl-0',
  'red',
  'section-subtitle',
);
programBlock2DivCol2.textContent = 'Exhibition';
programBlock2Div.appendChild(programBlock2DivCol2);

const programBlock2DivCol3 = document.createElement('div');
programBlock2DivCol3.classList.add(
  'col-sm-5',
  'col-12',
  'col-md-12',
  'pr-0',
  'pl-0',
);
programBlock2DivCol3.textContent = 'Have the time to share your thoughts and opinions with topic experts.';
programBlock2Div.appendChild(programBlock2DivCol3);

const programBlock3 = document.createElement('div');
programBlock3.classList.add(
  'col-12',
  'col-md-2',
  'pr-0',
  'pl-0',
  'program-block-parent',
);
mainProgramRow2.appendChild(programBlock3);

const programBlock3Div = document.createElement('div');
programBlock3Div.classList.add(
  'program-block',
  'text-center',
  'row',
  'mb-5',
  'p-4',
  'bg-dark-light-custom',
);
programBlock3.appendChild(programBlock3Div);

const programBlock3DivCol1 = document.createElement('div');
programBlock3DivCol1.classList.add(
  'col-sm-2',
  'col-12',
  'col-md-12',
  'pr-0',
  'pl-0',
);
programBlock3Div.appendChild(programBlock3DivCol1);

const programBlock3DivCol1Icon = document.createElement('i');
programBlock3DivCol1Icon.classList.add('far', 'fa-comments', 'text-white');
programBlock3DivCol1.appendChild(programBlock3DivCol1Icon);
const programBlock3DivCol2 = document.createElement('div');
programBlock3DivCol2.classList.add('col-sm-5', 'col-12', 'col-md-12', 'pr-0', 'pl-0', 'red', 'section-subtitle');
programBlock3DivCol2.textContent = 'Forum';
programBlock3Div.appendChild(programBlock3DivCol2);

const programBlock3DivCol3 = document.createElement('div');
programBlock3DivCol3.classList.add('col-sm-5', 'col-12', 'col-md-12', 'pr-0', 'pl-0');
programBlock3DivCol3.textContent = 'Have the time to share your thoughts and opinions with topic experts.';
programBlock3Div.appendChild(programBlock3DivCol3);

const programBlock4 = document.createElement('div');
programBlock4.classList.add('col-12', 'col-md-2', 'pr-0', 'pl-0', 'program-block-parent');
mainProgramRow2.appendChild(programBlock4);

const programBlock4Div = document.createElement('div');
programBlock4Div.classList.add('program-block', 'text-center', 'row', 'mb-5', 'p-4', 'bg-dark-light-custom');
programBlock4.appendChild(programBlock4Div);

const programBlock4DivCol1 = document.createElement('div');
programBlock4DivCol1.classList.add('col-sm-2', 'col-12', 'col-md-12', 'pr-0', 'pl-0');
programBlock4Div.appendChild(programBlock4DivCol1);

const programBlock4DivCol1Icon = document.createElement('i');
programBlock4DivCol1Icon.classList.add('fas', 'fa-laptop', 'text-white');
programBlock4DivCol1.appendChild(programBlock4DivCol1Icon);

const programBlock4DivCol2 = document.createElement('div');
programBlock4DivCol2.classList.add('col-sm-5', 'col-12', 'col-md-12', 'pr-0', 'pl-0', 'red', 'section-subtitle');
programBlock4DivCol2.textContent = 'Workshop';
programBlock4Div.appendChild(programBlock4DivCol2);

const programBlock4DivCol3 = document.createElement('div');
programBlock4DivCol3.classList.add('col-sm-5', 'col-12', 'col-md-12', 'pr-0', 'pl-0');
programBlock4DivCol3.textContent = 'Have the time to share your thoughts and opinions with topic experts.';
programBlock4Div.appendChild(programBlock4DivCol3);

const programBlock5 = document.createElement('div');
programBlock5.classList.add('col-12', 'col-md-2', 'pr-0', 'pl-0', 'program-block-parent');
mainProgramRow2.appendChild(programBlock5);

const programBlock5Div = document.createElement('div');
programBlock5Div.classList.add(
  'program-block',
  'text-center',
  'row',
  'mb-5',
  'p-4',
  'bg-dark-light-custom',
);
programBlock5.appendChild(programBlock5Div);
const programBlock5DivCol1 = document.createElement('div');
programBlock5DivCol1.classList.add('col-sm-2', 'col-12', 'col-md-12', 'pr-0', 'pl-0');
programBlock5Div.appendChild(programBlock5DivCol1);

const programBlock5DivCol1Icon = document.createElement('i');
programBlock5DivCol1Icon.classList.add('fas', 'fa-atom', 'text-white');
programBlock5DivCol1.appendChild(programBlock5DivCol1Icon);

const programBlock5DivCol2 = document.createElement('div');
programBlock5DivCol2.classList.add('col-sm-5', 'col-12', 'col-md-12', 'pr-0', 'pl-0', 'red', 'section-subtitle');
programBlock5DivCol2.textContent = 'Science Fair';
programBlock5Div.appendChild(programBlock5DivCol2);

const programBlock5DivCol3 = document.createElement('div');
programBlock5DivCol3.classList.add('col-sm-5', 'col-12', 'col-md-12', 'pr-0', 'pl-0');
programBlock5DivCol3.textContent = 'Have the time to share your thoughts and opinions with topic experts.';
programBlock5Div.appendChild(programBlock5DivCol3);

document.body.appendChild(mainProgram);
