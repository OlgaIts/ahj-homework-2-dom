export default 'app.js';

const holes = Array.from(document.querySelectorAll('.hole'));

function getNextHole() {
  let current;
  return () => {
    const i = Math.floor(Math.random() * holes.length);
    if (i !== current) {
      current = i;
    }
    if (i === current) {
      getNextHole();
    }
    return holes[i];
  };
}

const nextHole = getNextHole();

// holes
function run() {
  const hole = nextHole();
  let timer = null;
  hole.innerHTML = '<div class="goblin show"></div>';

  timer = setInterval(() => {
    hole.innerHTML = '';
    clearInterval(timer);
    run();
  }, 1100);
}
run();
