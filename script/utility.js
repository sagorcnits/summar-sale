function getElementId(element) {
  const elementId = document.getElementById(element);
  return elementId;
}

// converted number

function convertNumber(element) {
  const elementValue = getElementId(element).innerText;
  const convert = parseFloat(elementValue);
  return convert;
}

// setvalue function
function setTextValue(element, value) {
  const elementValue = getElementId(element);
  elementValue.innerText = value;
}
