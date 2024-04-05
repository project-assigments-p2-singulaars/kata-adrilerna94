

//TESTS
//1 Debo probar que la funcion palindrome funciona
//2 Debo probar que funciona para cadenas de texto
//3 Debo probar que funciona para numeros enteros (positivos y no decimales)
//4 Debo probar que funciona si hay espacios en blanco
//5 Debo probar que funciona si hay mayúsculas y minúsculas
//6 Debo probar que envie un mensaje de Error cuando la persona introduzca un símbolo no alfanumérico y que le obligue a volver a introducir 
//..> un input válido
// 7 Debo imprimir por pantalla "el numero/palabra es palíndroma" o "el numero/palabra NO es palíndroma"



//CÓDIGO

// Recorrer la variable input
// Convertir el input a string en el caso de que sea number
// condición de que el input no tenga símbolos



function palindrome(){

    let input,regexSymb,symbol,inputType;
    
    do {
        input = prompt(`Por favor, introduzca un número, palabra o frase VÁLIDO para comprobar si el número es capicúa o la palabra o frase es palíndroma \n
        Recuerda que no está permitido el uso de símbolos (Ej símbolos: -+@$€:`);
        
        regexSymb = /[^\w\s]/g;
        symbol = input.match(regexSymb);

    } while (symbol != null)

    let inputClean = input.trim().toLowerCase();
    let numParsObj = new Number(inputClean);
    let numParsVal = numParsObj.valueOf();
    let leninput = inputClean.length;

    if (!isNaN(numParsVal)){
        inputType = "number";

    } else{
        inputType = "string";

    }

    let isPalindrome = true;
    for (let index = 0; index < leninput/2; index++) {

        if (inputClean[index] != inputClean[leninput-1-index]){
            
            isPalindrome = false;
            break;
        }
    }

    let result;
    if (inputType === "number") {
        result = isPalindrome ? "ES CAPICÚA!!" : "NO ES CAPICÚA!!";
    
    } else {
        result = isPalindrome ? "ES PALÍNDROMA!!" : "NO ES PALÍNDROMA!!";
    }
    
    return result

}
console.log(palindrome());