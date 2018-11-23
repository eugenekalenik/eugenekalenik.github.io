import { url } from './constants';


export function getRateDynamicRequest() {
  fetch(url)
    .then(res => res.json())
    .then(data => drawChart(data))
    .catch(error => console.log('Error: ', error));
}