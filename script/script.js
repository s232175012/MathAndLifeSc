// Toggle between Math and Life Science topics
const topicRadios = document.querySelectorAll('input[name="topicSubject"]');
const mathTopics = document.getElementById('mathTopics');
const lifeSciTopics = document.getElementById('lifeSciTopics');

topicRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    if(radio.value === 'math') {
      mathTopics.classList.remove('hidden');
      lifeSciTopics.classList.add('hidden');
    } else {
      lifeSciTopics.classList.remove('hidden');
      mathTopics.classList.add('hidden');
    }
  });
});

// Toggle between Math and Life Science + Notes/Papers forms
const subjectRadios = document.querySelectorAll('input[name="subjectType"]');
const resourceRadios = document.querySelectorAll('input[name="resourceType"]');
const mathNotesForm = document.getElementById('mathNotesForm');
const mathPapersForm = document.getElementById('mathPapersForm');
const lifeSciNotesForm = document.getElementById('lifeSciNotesForm');
const lifeSciPapersForm = document.getElementById('lifeSciPapersForm');
const results = document.getElementById('results');

function showForm() {
  const subject = document.querySelector('input[name="subjectType"]:checked').value;
  const resource = document.querySelector('input[name="resourceType"]:checked').value;

  // Hide all forms
  mathNotesForm.classList.add('hidden');
  mathPapersForm.classList.add('hidden');
  lifeSciNotesForm.classList.add('hidden');
  lifeSciPapersForm.classList.add('hidden');

  // Show correct form
  if(subject === 'math' && resource === 'notes') mathNotesForm.classList.remove('hidden');
  if(subject === 'math' && resource === 'papers') mathPapersForm.classList.remove('hidden');
  if(subject === 'lifesci' && resource === 'notes') lifeSciNotesForm.classList.remove('hidden');
  if(subject === 'lifesci' && resource === 'papers') lifeSciPapersForm.classList.remove('hidden');

  results.innerHTML = '';
}

subjectRadios.forEach(radio => radio.addEventListener('change', showForm));
resourceRadios.forEach(radio => radio.addEventListener('change', showForm));

// Dummy search - replace with Google Sheet API later
document.getElementById('mathNotesVideoForm').addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const grade = formData.get('grade');
  const paper = formData.get('paper');
  const type = formData.get('type');
  const topic = formData.get('topic');

  results.innerHTML = `
    <div class="result-card">
      <h4>Math ${grade} ${paper} - ${topic}</h4>
      <p>${type} found! Connect Google Sheet to show real links.</p>
      <a href="#" target="_blank">📥 Download ${type}</a>
      ${type === 'Video'? '<a href="#" target="_blank">▶️ Watch on YouTube</a>' : ''}
    </div>
  `;
});

document.getElementById('mathPapersMemosForm').addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const grade = formData.get('grade');
  const paper = formData.get('paper');
  const type = formData.get('type');
  const year = formData.get('year');

  results.innerHTML = `
    <div class="result-card">
      <h4>Math ${grade} ${paper} ${type} - ${year}</h4>
      <p>${type} found! Connect Google Sheet to show real PDF links.</p>
      <a href="#" target="_blank">📥 Download ${type} PDF</a>
    </div>
  `;
});

document.getElementById('lifeSciNotesVideoForm').addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const grade = formData.get('grade');
  const type = formData.get('type');
  const topic = formData.get('topic');

  results.innerHTML = `
    <div class="result-card">
      <h4>Life Science ${grade} - ${topic}</h4>
      <p>${type} found! Connect Google Sheet to show real links.</p>
      <a href="#" target="_blank">📥 Download ${type}</a>
      ${type === 'Video'? '<a href="#" target="_blank">▶️ Watch on YouTube</a>' : ''}
    </div>
  `;
});

document.getElementById('lifeSciPapersMemosForm').addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const grade = formData.get('grade');
  const type = formData.get('type');
  const year = formData.get('year');

  results.innerHTML = `
    <div class="result-card">
      <h4>Life Science ${grade} ${type} - ${year}</h4>
      <p>${type} found! Connect Google Sheet to show real PDF links.</p>
      <a href="#" target="_blank">📥 Download ${type} PDF</a>
    </div>
  `;
});