function requestAnimationFrame(callback) {
  setTimeout(callback, 0).unref();
}

window.requestAnimationFrame = requestAnimationFrame;

global.requestAnimationFrame = requestAnimationFrame;
