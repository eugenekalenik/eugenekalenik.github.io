function drawLine({ x1, y1, x2, y2, strokeStyle, lineCap, lineWidth }) {
  ctx.beginPath();
  ctx.strokeStyle = strokeStyle;
  ctx.lineCap = lineCap; // butt | round | square
  ctx.lineWidth = lineWidth;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}

function drawRound({ x, y, radius, strokeStyle, lineWidth, fillStyle }) {
  const startAngle = 0;
  const endAngle = 2 * Math.PI;
  const clockwise = false;

  ctx.beginPath();
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.fillStyle = fillStyle;
  ctx.arc(x, y, radius, startAngle, endAngle, clockwise);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

function drawRectangle({ x1, y1, x2, y2, strokeStyle, lineWidth, fillStyle }) {
  ctx.beginPath();
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.fillStyle = fillStyle;
  ctx.rect(x1, y1, x2, y2);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

function drawText({ text, x, y }) {
  ctx.beginPath();
  ctx.font = "12px Arial";
  ctx.fillStyle = "#000";
  ctx.textStyle = 'bold';
  ctx.fillText(text, x, y);
  ctx.closePath();
}