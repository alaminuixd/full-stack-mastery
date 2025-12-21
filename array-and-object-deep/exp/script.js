function setup(width, height, color) {
  if (typeof color !== 'string') {
    return console.log('color must be a string');
  }
  const container = document.createElement('div');
  container.style.cssText = `width:${width}px; height:${height}px; background-color: ${color};`;
  container.classList.add('container');
  document.body.append(container);
}
/* document.addEventListener('DOMContentLoaded', () => {
}); */
setup(100, 100, 'red');
