// const textElement = document.getElementById('intro-text');
const textContainer = document.getElementById('text-container');
const cursorElement = document.getElementById('cursor');
const finalCursor = cursorElement.cloneNode();
const text = "Hello, my name is Jonathan Warren, and I'm a full-stack software engineer.";
let index = 0;
let textElement;

setTimeout(renderText, 2500);

function renderText() {
  if (index < text.length) {
    if (index === 0) {
        cursorElement.parentNode.removeChild(cursorElement)

        textElement = document.createElement('h1');
        textElement.classList.add('uk-margin-xlarge-left', 'uk-light', 'uk-text-left', 'uk-margin-xlarge-right');
        textElement.id = 'intro-text';
        textElement.textContent = '';
        textContainer.appendChild(textElement);

        textElement.innerHTML += text.charAt(index) + '|';
      } 
    else if (index === 27) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        textElement.innerHTML += '<br>';
        textElement.innerHTML += text.charAt(index) + '|';
    }
    else if (index === 55) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        textElement.innerHTML += '<br>';
        textElement.innerHTML += text.charAt(index) + '|';
    }
    else {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        textElement.innerHTML += text.charAt(index) + '|';
      }

    index++;

    setTimeout(renderText, 60);
  } else {
    textElement.innerHTML = textElement.innerHTML.slice(0, -1);
  }
}
