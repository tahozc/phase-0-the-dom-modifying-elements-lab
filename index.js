const main = document.getElementById('main');
main.remove();
const newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');
newHeader.innerHTML = "YOUR-NAME is the champion";
document.head.appendChild(element);
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    const rightNumbers = dodger.style.right.replace("px", "");
    const right = parseInt(rightNumbers, 10);
  
    if (right > 0) {
      dodger.style.right = `${right - 1}px`;
    }
  }

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });