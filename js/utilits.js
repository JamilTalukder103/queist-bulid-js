function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const value = parseFloat(inputValue)
    return value;
}

function getElementValueById(id) {
    const elementValue = document.getElementById(id).innerText;
    const value = parseFloat(elementValue);
    return value;

}

function setElemntByText(id, value) {
    const setElement = document.getElementById(id).innerText = value;
    return setElement;
}