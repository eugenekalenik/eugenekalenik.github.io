import { iTasks } from './itransition-tasks.js';
import { otherTasks } from './other-tasks.js';


(function () {
  iTasks.map((task, index) => {
    document.querySelector('.itransition').innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td class="w-25">${task.title}</td>
        <td class="text-muted w-50">${task.description}</td>
        <td class="text-center">
          ${task.demoPath === '' ? '-' : `<a href=${task.demoPath}>
            <i class="fas fa-desktop"></i>
          </a>`}
        </td>
        <td class="text-center">
          ${task.codePath === '' ? '-' : `<a href=${task.codePath}>
            <i class="fas fa-code"></i>
          </a>`}
        </td>
      </tr>
    `;
  });

  otherTasks.map((task, index) => {
    document.querySelector('.other').innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td class="w-25">${task.title}</td>
        <td class="text-muted w-50">${task.description}</td>
        <td class="text-center">
          ${task.demoPath === '' ? '-' : `<a href=${task.demoPath}>
            <i class="fas fa-desktop"></i>
          </a>`}
        </td>
        <td class="text-center">
          ${task.codePath === '' ? '-' : `<a href=${task.codePath}>
            <i class="fas fa-code"></i>
          </a>`}
        </td>
      </tr>
    `;
  });
}());