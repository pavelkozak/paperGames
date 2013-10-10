
function setupArrays() {
    for (i = 0; i < numOfCells; i++) {
        filledCellArray[i] = new Array(numOfCells);
        for (j = 0; j < numOfCells; j++) {
            emptyCellArray.push([i, j]);
            filledCellArray[i][j] = 0;
        }
    }
}

function drawX(x, y) {
    var x1 = sizeOfCell * x + offsetForX;
    var x2 = sizeOfCell * (x + 1) - offsetForX;
    var y1 = sizeOfCell * y + offsetForX;
    var y2 = sizeOfCell * (y + 1) - offsetForX;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.moveTo(x2, y1);
    ctx.lineTo(x1, y2);
    ctx.lineWidth = lineWidth;
    ctx.stroke();
}

function draw0(x, y) {
    ctx.beginPath();
    ctx.arc(sizeOfCell * x + cellHalf, sizeOfCell * y + cellHalf, cellHalf - offsetForX, 0, 2 * Math.PI, false);
    ctx.lineWidth = lineWidth;
    ctx.stroke();
}

function drawPlus(x, y) {

    ctx.beginPath();
    ctx.moveTo(sizeOfCell * x + cellHalf, sizeOfCell * y + offsetForX);
    ctx.lineTo(sizeOfCell * x + cellHalf, sizeOfCell * (y + 1) - offsetForX);
    ctx.moveTo(sizeOfCell * x + offsetForX, sizeOfCell * y + cellHalf);
    ctx.lineTo(sizeOfCell * (x + 1) - offsetForX, sizeOfCell * y + cellHalf);
    ctx.lineWidth = lineWidth;
    ctx.stroke();
}

function drawSym(x, y, type) {
    switch (type) {
        case 1 : 
            drawX(x, y);
            break
        case 2:
            draw0(x, y);
            break
        case 3:
            drawPlus(x, y)
            break
    }
    
}
function drawField() {
    ctx.strokeRect(0, 0, sizeField, sizeField);

    for (i = 1; i < numOfCells; i++) {
        ctx.beginPath();
        ctx.moveTo(1, i * sizeOfCell);
        ctx.lineTo(sizeField - 1, i * sizeOfCell);
        ctx.moveTo(i * sizeOfCell, 1);
        ctx.lineTo(i * sizeOfCell, sizeField - 1);
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}
