const input = document.getElementById('input');
const output = document.getElementById('output');
const runButton = document.getElementById('run-button');

runButton.addEventListener('click', evaluateCode);
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && event.shiftKey) {
        event.preventDefault();
        evaluateCode();
    }
});

function evaluateCode() {
    const code = input.value;
    let result;

    try {
        result = eval(code);
        output.innerHTML += `> ${code}\n`;
        output.innerHTML += `<span class="result"><- ${result}</span>\n`;
    } catch (error) {
        output.innerHTML += `> ${code}\n`;
        output.innerHTML += `<span class="error"><- Error: ${error}</span>\n`;
    }

    input.value = '';
    output.scrollTop = output.scrollHeight;
}
