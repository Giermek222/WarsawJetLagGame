const fill = (x, y, team, data, width) => {
    if (team === 0) return;
    let stack = [{ x, y }];
    while (stack.length > 0) {
      let {x, y} = stack.pop();
      let lx = x;

      while (isValidSquare(lx, y, data, width)) {
        
        drawpixel(lx, y, team, data, width)
        lx = lx - 1;
      }

      let rx = x + 1;
      while (isValidSquare(rx, y,  data, width)) {
        
        drawpixel(rx, y, team, data, width)
        rx = rx + 1;
      }
      scan(lx, rx - 1, y + 1, stack, data, width);
      scan(lx, rx - 1, y - 1, stack, data, width)
    }
    return;
  }

  const scan = (lx, rx, y, stack, data, width) => {
    for (let i = lx; i < rx; i++) {
      if (isValidSquare(i, y, data, width)) {
        stack.push({ x: i, y: y });
      }
    }
  }

  const isValidSquare = (x, y, data, width) => {
    let index = (y * width + x) * 4;
    return (
      data[index] === 255 &&
      data[index + 1] === 255 &&
      data[index + 2] === 255)

  }

  const drawpixel = (x, y, team, data, width) => {
    let index = (y * width + x) * 4;
    if (team === 0) {
      data[index] = 255;   // Red
      data[index + 1] = 255;  // Green
      data[index + 2] = 255;  // Blue

    }
    else if (team === 1) {
      data[index] = 255;   // Red
      data[index + 1] = 0;  // Green
      data[index + 2] = 0;  // Blue

    }
    else if (team === 2) {
        data[index] = 0;   // Red
        data[index + 1] = 255;  // Green
        data[index + 2] = 0;  // Blue
  
      }
      else if (team === 3) {
        data[index] = 0;   // Red
        data[index + 1] = 0;  // Green
        data[index + 2] = 255;  // Blue
  
      }
  }
export default fill