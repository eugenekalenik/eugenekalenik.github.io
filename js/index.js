import { iTasks } from './itransition-tasks.js';
import { otherTasks } from './other-tasks.js';


(function () {
  iTasks.map(task => {
    document.querySelector('.itransition').innerHTML += `
      <tr>
        <td>${task.id}</td>
        <td>${task.title}</td>
        <td class="text-muted">${task.description}</td>
        <td class="text-right">${task.maxScore}</td>
        <td class="text-right">${task.score}</td>
        <td class="text-center">
          ${task.demoPath === '' ? '-' : `<a href=${task.demoPath}>
            <i class="material-icons">pageview</i>
          </a>`}
        </td>
        <td class="text-center">
          ${task.codePath === '' ? '-' : `<a href=${task.codePath}>
            <i class="material-icons">code</i>
          </a>`}
        </td>
      </tr>
    `;
  });

  otherTasks.map(task => {
    document.querySelector('.other').innerHTML += `
      <tr>
        <td>${task.id}</td>
        <td>${task.title}</td>
        <td class="text-muted">${task.description}</td>
        <td class="text-center">
          ${task.demoPath === '' ? '-' : `<a href=${task.demoPath}>
            <i class="material-icons">pageview</i>
          </a>`}
        </td>
        <td class="text-center">
          ${task.codePath === '' ? '-' : `<a href=${task.codePath}>
            <i class="material-icons">code</i>
          </a>`}
        </td>
      </tr>
    `;
  });
}());