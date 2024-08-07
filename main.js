const codeArea = document.querySelector('.code-area');
const lineNumbers = document.querySelector('.line-numbers');

function createLineElement(lineNumber) {
    const element = document.createElement('div');
    element.className = 'line-number';
    element.textContent = lineNumber.toString();
    return element;
}

function updateLineNumbers() {
    const lines = codeArea.innerText.split('\n');
    lineNumbers.innerHTML = '';

    const fragment = document.createDocumentFragment();

    lines.forEach((_, index) => {
        fragment.appendChild(createLineElement(index + 1));
    });

    fragment.appendChild(createLineElement(lines.length + 1));

    lineNumbers.appendChild(fragment);
}

updateLineNumbers();