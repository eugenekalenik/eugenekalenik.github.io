// Data & Fetch

const currency = '145';
const startDate = '2018-11-1';
const endDate = '2018-11-10';
const NBRB_URL = `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${currency}?startDate=${startDate}&endDate=${endDate}`;

async function getDynamic() {
  try {
    await fetch(NBRB_URL).then(res => res.json()).then(data => {
      drawDollarDynamic(data);
      drawDates(data);
      drawY(data);
    });
  } catch (error) {
    console.log('Catch Error: ', error);
  }
}

getDynamic();


// Canvas

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const PI = Math.PI;

function drawLine(x1, y1, x2, y2, color, lineType, lineWidth) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = lineType; // butt | round | square
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}

function drawDates(data) {
  data.map((item, index) => {
    ctx.font = "12px Arial";
    ctx.fillStyle = "#000";
    ctx.textStyle = 'bold';
    ctx.fillText(new Date(item.Date).getDate() + '.' + new Date(item.Date).getMonth(), (index + 1) * 80, 575);
  })
}

function drawY(data) {
  let sum = 0;

  data.map(item => {
    sum += Number(item.Cur_OfficialRate);
  });

  const medianRate = sum / data.length;
  const minRate = Math.floor(medianRate);
  const maxRate = Math.ceil(medianRate);

  data.map((item, index) => {
    itemPos = index;
    ctx.font = "12px Arial";
    ctx.fillStyle = "#000";
    ctx.textStyle = 'bold';
    ctx.fillText(minRate, 25, 500);
    ctx.fillText(maxRate, 25, 100);
    const rate = Number(item.Cur_OfficialRate) * 10000 - 21000;
    drawLine((index + 1) * 80, rate, (index + 2) * 80, rate, '#999', 'round', 1);
    drawRound((index + 1) * 80, rate, 3, 0, 2 * PI, false, 'transparent', 0, 'red');
  });

  drawLine(50, 50, 50, 550, '#999', 'round', 1);
  drawLine(50, 550, 850, 550, '#999', 'round', 1);
}

// ***

function drawDollarDynamic(data) {
  data.map((item, index) => {
    // drawDates();
    console.log(item);

    // const el = document.createElement('div');
    // el.append(item.Cur_OfficialRate + ' - ' + index);
    // document.getElementById('rates').appendChild(el);
  })
}

function drawRound(x, y, radius, startAngle, endAngle, where, color, lineWidth, fillStyle) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.fillStyle = fillStyle;
  ctx.arc(x, y, radius, startAngle, endAngle, where);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

// drawRound(300, 200, 50, 0, 2 * PI, false, 'red', 5, 'yellow');
// drawRound(500, 300, 100, 0, 2 * PI, false, 'green', 1, 'pink');


// ctx.clearRect(0, 0, 400, 200); // Очистка canvas

// ctx.fillRect(x, y, 10, 10);

canvas.onmousedown = function (event) {
  canvas.onmousemove = function (event) {
    const x = event.offsetX;
    const y = event.offsetY;
    ctx.fillRect(x, y, 10, 10);
  }
}

