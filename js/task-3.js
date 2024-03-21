const input = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');

input.addEventListener("input", () => {
    const textValue = input.value.trim();
    if (textValue === "") {
        spanText.textContent = "Anonymous";
    } else {
        spanText.textContent = textValue;
}
})