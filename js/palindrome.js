function validateInput(input) {
  let isSpace, isSymbol;
  let regexOnlySpace = /^ *$/;
  let regexSymb = /[^\w\s]|_/g;

  isSymbol = regexSymb.test(input);
  isSpace = regexOnlySpace.test(input);

  if (input === null || input === "") {
    return "Ups! Parece que olvidaste introducir un valor.";
  } else if (isSpace) {
    return "Recuerda que únicamente espacios no se consideran un valor válido.";
  } else if (isSymbol) {
    return "Recuerda que los símbolos no están permitidos.";
  } else {
    return null;
  }
}

function cleanInput(input) {
  return input.replace(/\s/g, "").toLowerCase();
}

function checkInputType(input) {
  let numParsObj = new Number(input);
  let numParsVal = numParsObj.valueOf();

  return !isNaN(numParsVal) ? "number" : "string";
}

function isPalindrome(input) {
  for (let index = 0; index < input.length / 2; index++) {
    if (input[index] != input[input.length - 1 - index]) {
      return false;
    }
  }
  return true;
}

function checkPalindrome(input) {
  const validationError = validateInput(input);
  if (validationError) {
    return validationError;
  }

  const cleanedInput = cleanInput(input);
  const inputType = checkInputType(cleanedInput);
  const palindromeResult = isPalindrome(cleanedInput);

  if (inputType === "number") {
    return palindromeResult? `${cleanedInput} ES CAPICÚA!!`: `${cleanedInput} NO ES CAPICÚA!!`;
  } else {
    return palindromeResult? `${cleanedInput} ES PALÍNDROMA!!`: `${cleanedInput} NO ES PALÍNDROMA!!`;
  }
}

module.exports = {
    validateInput,
    cleanInput,
    checkInputType,
    isPalindrome,
    checkPalindrome
};