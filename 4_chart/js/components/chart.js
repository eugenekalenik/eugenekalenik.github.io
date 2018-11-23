import Line from '../shapes/Line.js';
import Round from '../shapes/Round.js';
import Text from '../shapes/Text.js';
import { canvas, chartOptions } from '../constants/index.js';


export default class Chart {
  constructor(data) {
    this.data = data;
    this.drawAxes();
    this.drawGrid();

    // this.render();
  }

  drawAxes() {
    chartOptions.axes.map(item => new Line(item));
  }

  getMinRate() {
    let minRate = Infinity;

    this.data.map(item => {
      if (item.Cur_OfficialRate < minRate) {
        minRate = item.Cur_OfficialRate;
      } else {
        return;
      }
    });

    return minRate;
  }

  getMaxRate() {
    let maxRate = 0;

    this.data.map(item => {
      if (item.Cur_OfficialRate > maxRate) {
        maxRate = item.Cur_OfficialRate;
      } else {
        return;
      }
    });

    return maxRate;
  }

  drawGrid() {
    const minRate = this.getMinRate();
    const maxRate = this.getMaxRate();

    const minValue = Math.floor(minRate * 100) / 100;
    const maxValue = Math.ceil(maxRate * 100) / 100;

    const step = (maxValue - minValue) / this.data.length;

    new Text({ text: maxValue, x: 120, y: (canvas.height - 100) / 20 });
    new Text({ text: minValue, x: 120, y: (canvas.height - 100) / 1 });

    console.log('minRate', minRate, 'maxRate', maxRate);
    console.log('minValue', minValue, 'maxValue', maxValue);

    this.data.map((item, index) => {
      const x = index * (canvas.width - chartOptions.axes[0].x1) / this.data.length + 100;
      const y = index * (canvas.height - chartOptions.axes[0].y1 - chartOptions.axes[0].x1) / this.data.length;
      const text = new Date(item.Date).getDate() + '.' + new Date(item.Date).getMonth();
      const rate = item.Cur_OfficialRate;

      // X
      new Line({
        x1: 100,
        y1: y,
        x2: 900,
        y2: y,
        strokeStyle: '#f8f8f8',
        lineCap: 'round',
        lineWidth: 1
      });

      // Y
      new Line({
        x1: x,
        y1: 0,
        x2: x,
        y2: 500,
        strokeStyle: '#f8f8f8',
        lineCap: 'round',
        lineWidth: 1
      });

      new Text({ text, x: x - 15, y: 550 }); // X
      new Text({ text: rate, x: 50, y }); // Y
      // new Text({ text: item.Cur_OfficialRate, x: x + 10, y: y + 15 });

      new Round({
        x: x,
        y: y,
        radius: 5,
        strokeStyle: '#f00',
        lineWidth: 1,
        fillStyle: '#fcc'
      });
    });
  }

  drawAxisX() {
    this.data.map((item, index) => {
      const x = (index + 1) * 75 + 35;
      const y = 575;
      const text = new Date(item.Date).getDate() + '.' + new Date(item.Date).getMonth();

      new Text({ text, x, y });
    });
  }

  drawAxisY() {
    this.data.map(item => {
      const x = 40;
      const y = canvas.height - (item.Cur_OfficialRate * 10000 - 21000) - 80;
      const text = item.Cur_OfficialRate;

      new Text({ text, x, y });
    });
  }

  drawChartLines() {
    let prevRate = 0;

    this.data.map((item, index) => {
      const x = index * 75 + 50;
      const x2 = (index + 1) * 75 + 50;
      const currentRate = canvas.height - (item.Cur_OfficialRate * 100 - 209) * 100;

      if (prevRate !== 0) {
        new Line({
          x1: x,
          y1: prevRate + 20,
          x2: x2,
          y2: currentRate + 20,
          strokeStyle: '#f66',
          lineCap: 'round',
          lineWidth: 2
        });
      }

      prevRate = currentRate;
    });
  }

  drawChartDots() {
    this.data.map((item, index) => {
      const x = (index + 1) * 75 + 50;
      const y = canvas.height - (item.Cur_OfficialRate * 10000 - 21000) - 100;

      new Text({ text: item.Cur_OfficialRate, x: x + 10, y: y + 15 });
      new Round({ x, y: y + 20, radius: 5, strokeStyle: '#f66', lineWidth: 2, fillStyle: '#fcc' });
    });
  }

  render() {
    // drawAxes();
    this.drawAxesLines();
    this.drawAxisX();
    this.drawAxisY();
    this.drawChartLines();
    this.drawChartDots();
  }
}