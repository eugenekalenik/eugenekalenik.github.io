const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const codeUrl = 'https://github.com/eugenekalenik/eugenekalenik.github.io/tree/master/';
const tasks = [
  {
    id: 1, maxScore: 6, score: '-',
    title: 'Canvas. Rectangle & Round.',
    description: '',
    demoUrl: '',
    codeUrl: codeUrl + '',
  },
  {
    id: 2, maxScore: 4, score: '-',
    title: 'Wizard.',
    description: '',
    demoUrl: '',
    codeUrl: codeUrl + '',
  },
  {
    id: 3, maxScore: 4, score: 3.5,
    title: 'Fetch & Tabs.',
    description: '',
    demoUrl: '3_news',
    codeUrl: codeUrl + '3_news',
  },
  {
    id: 4, maxScore: 4, score: 3,
    title: 'Canvas. Line Chart.',
    description: '',
    demoUrl: '4_chart',
    codeUrl: codeUrl + '4_chart',
  },
  {
    id: 5, maxScore: '-', score: '-',
    title: 'Canvas. Image Crop.',
    description: '',
    demoUrl: '',
    codeUrl: codeUrl + '',
  },
];

tasks.map(task => {
  tbody.innerHTML += `
    <tr>
      <td>${task.id}</td>
      <td>${task.title}<div class="small">${task.description}</div></td>
      <td class="text-center">
        ${task.demoUrl === '' ? '-' : `<a href=${task.demoUrl}>
          <i class="material-icons">pageview</i>
        </a>`}
      </td>
      <td class="text-center">
        ${task.demoUrl === '' ? '-' : `<a href=${task.codeUrl}>
          <i class="material-icons">code</i>
        </a>`}
      </td>
      <td class="text-right">${task.maxScore}</td>
      <td class="text-right">${task.score}</td>
    </tr>
  `;
});

// table.innerHTML += `
//   <thead>
//     <tr>
//       <th></th>
//       <th colspan="3">Total</th>
//       <th class="text-right">-</th>
//       <th class="text-right">-</th>
//     </tr>
//   </thead>
// `;