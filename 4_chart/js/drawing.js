function drawAxes() {
  // axis Y
  drawLine({ x1: 100, y1: 20, x2: 100, y2: 550, strokeStyle: '#999', lineCap: 'round', lineWidth: 2 });

  drawLine({ x1: 100, y1: 20, x2: 95, y2: 25, strokeStyle: '#999', lineCap: 'round', lineWidth: 2 });
  drawLine({ x1: 100, y1: 20, x2: 105, y2: 25, strokeStyle: '#999', lineCap: 'round', lineWidth: 2 });

  // axis X
  drawLine({ x1: 100, y1: 550, x2: 850, y2: 550, strokeStyle: '#999', lineCap: 'round', lineWidth: 2 });

  drawLine({ x1: 845, y1: 545, x2: 850, y2: 550, strokeStyle: '#999', lineCap: 'round', lineWidth: 2 });
  drawLine({ x1: 845, y1: 555, x2: 850, y2: 550, strokeStyle: '#999', lineCap: 'round', lineWidth: 2 });
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

    drawLine({
      x1: prevRate === 0 ? 0 : x,
      y1: prevRate === 0 ? 0 : prevRate + 20,
      x2: prevRate === 0 ? 0 : x2,
      y2: prevRate === 0 ? 0 : currentRate + 20,
      strokeStyle: '#f00',
      lineCap: 'round',
      lineWidth: 2
    });

    prevRate = currentRate;
  });
}

function drawChartDots(data) {
  data.map((item, index) => {
    const x = (index + 1) * 75 + 50;
    const y = canvas.height - (item.Cur_OfficialRate * 10000 - 21000) - 100;

    drawRound({
      x,
      y: y + 20,
      radius: 5,
      strokeStyle: '#f00',
      lineWidth: 2,
      fillStyle: '#fc0'
    });
  });
}

function drawChart(data) {
  drawAxes();
  drawAxisX(data);
  drawAxisY(data);
  drawChartLines(data);
  drawChartDots(data);
}