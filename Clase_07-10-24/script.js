const display = document.getElementById('display'); // Obtiene el elemento "display"

function appendToDisplay(value) { // Agrega "value" al display
    document.getElementById('display').value += value;
}

function clearDisplay() { // Limpia el "display"
    document.getElementById('display').value = '';
}

function deleteLast() { // Elimina el último carácter del "display"
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

function calculateResult() { // Calcula la expresion en el "display"
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result; // Muestra el resultado
    } catch (error) {
        alert('Expresión inválida'); // Muestra si es que existe un error
    }
}