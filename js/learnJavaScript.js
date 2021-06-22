//let ballBlue = document.getElementById("ballBlue");
//let ballRed = document.getElementById("ballRed");
//ballBlue.style.display = "block";
//ballRed.style.display = "none";
const formContact = () => {
    let name = document.getElementById("name").value;
    let birthday = document.getElementById("birthday").value;
    let message = document.getElementById("message").value;
    alert(`Bienvenido: ${name} 
    tu fecha de nacimiento es: ${birthday}.
    Gracias por escribir este mensaje: ${message}`);

}

const suma = () => {
    let num1 = parseFloat(document.getElementById("sumaNum1").value);
    let num2 = parseFloat(document.getElementById("sumaNum2").value);
    let result = num1 + num2;
    alert(`La suma es: ${result}`)
}

const resta = () => {
    let num1 = parseFloat(document.getElementById("restaNum1").value);
    let num2 = parseFloat(document.getElementById("restaNum2").value);
    let result = num1 - num2;
    alert(`La resta es: ${result}`)
}

const division = () => {
    let num1 = parseFloat(document.getElementById("divisionNum1").value);
    let num2 = parseFloat(document.getElementById("divisionNum2").value);
    let result = num1 / num2;
    alert(`La división es: ${result}`)
}

const multiplicar = () => {
    let num1 = parseFloat(document.getElementById("multiplicacionNum1").value);
    let num2 = parseFloat(document.getElementById("multiplicacionNum2").value);
    let result = num1 * num2;
    alert(`La multiplicación es: ${result}`)
}


const viewBallBlue = () => {

}
