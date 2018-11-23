function drawAxes() {
  // axis Y
  drawLine({ x1: 100, y1: 20, x2: 100, y2: 550, strokeStyle: '#ccc', lineCap: 'round', lineWidth: 2 });

  drawLine({ x1: 100, y1: 20, x2: 95, y2: 25, strokeStyle: '#ccc', lineCap: 'round', lineWidth: 2 });
  drawLine({ x1: 100, y1: 20, x2: 105, y2: 25, strokeStyle: '#ccc', lineCap: 'round', lineWidth: 2 });

  // axis X
  drawLine({ x1: 100, y1: 550, x2: 850, y2: 550, strokeStyle: '#ccc', lineCap: 'round', lineWidth: 2 });

  drawLine({ x1: 845, y1: 545, x2: 850, y2: 550, strokeStyle: '#ccc', lineCap: 'round', lineWidth: 2 });
  drawLine({ x1: 845, y1: 555, x2: 850, y2: 550, strokeStyle: '#ccc', lineCap: 'round', lineWidth: 2 });
}

function drawAxesLines(data) {
  data.map((item, index) => {
    const x = (index + 1) * 75 + 50;
    const y = (index + 1) * 50;

    drawLine({
      x1: x,
      y1: 20,
      x2: x,
      y2: 550,
      strokeStyle:'#eee',
      lineCap: 'round',
      lineWidth: 1
    });
    drawLine({
      x1: 100,
      y1: y,
      x2: 845,
      y2: y,
      strokeStyle:'#eee',
      lineCap: 'round',
      lineWidth: 1
    });
  });
}

function drawAxisX(data) {
  data.map((item, index) => {
    const x = (index + 1) * 75 + 35;
    const y = 575;
    const text = new Date(item.Date).getDate() + '.' + new Date(item.Date).getMonth();

    drawText({ text, x, y });
  });
}

function drawAxisY(data) {
  data.map(item => {
    const x = 40;
    const y = canvas.height - (item.Cur_OfficialRate * 10000 - 21000) - 80;
    const text = item.Cur_OfficialRate;

    drawText({ text, x, y });
  });
}

function drawChartLines(data) {
  let prevRate = 0;

  data.map((item, index) => {
    const x = index * 75 + 50;
    const x2 = (index + 1) * 75 + 50;
    const currentRate = canvas.height - (item.Cur_OfficialRate * 100 - 209) * 100;

    if (prevRate !== 0) {
      drawLine({
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

function drawChartDots(data, event) {
  data.map((item, index) => {
    const x = (index + 1) * 75 + 50;
    const y = canvas.height - (item.Cur_OfficialRate * 10000 - 21000) - 100;

    drawText({ text: item.Cur_OfficialRate, x: x + 10, y: y + 15 });
    drawRound({ x, y: y + 20, radius: 5, strokeStyle: '#f66', lineWidth: 2, fillStyle: '#fcc' });
  });
}

function drawChart(data) {
  drawAxes();
  drawAxesLines(data);
  drawAxisX(data);
  drawAxisY(data);
  drawChartLines(data);
  drawChartDots(data);
}