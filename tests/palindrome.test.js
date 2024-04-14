import { describe, expect, it } from "vitest";
import {
  validateInput,
  cleanInput,
  checkInputType,
  isPalindrome,
  checkPalindrome,
} from "../js/palindrome";

describe("validateInput(input)", () => {
  it("validateInput() to be defined", () => {
    expect(validateInput).toBeDefined();
  });
  it("validateInput('') should return,\"Ups! Parece que olvidaste introducir un valor.\"", () => {
    const emptyString = "";
    const expectedResult = "Ups! Parece que olvidaste introducir un valor.";
    const sut = validateInput(emptyString);

    expect(sut).toBe(expectedResult);
  });
  it('validateInput(null) should return,"Ups! Parece que olvidaste introducir un valor."', () => {
    const nullValue = null;
    const expectedResult = "Ups! Parece que olvidaste introducir un valor.";
    const sut = validateInput(nullValue);

    expect(sut).toBe(expectedResult);
  });
  it("validateInput(' ') should return, 'Recuerda que únicamente espacios no se consideran un valor válido.'", () => {
    const onlyOneSpaceString = " ";
    const expectedResult =
      "Recuerda que únicamente espacios no se consideran un valor válido.";
    const sut = validateInput(onlyOneSpaceString);

    expect(sut).toBe(expectedResult);
  });
  it("validateInput('   ') should return, 'Recuerda que únicamente espacios no se consideran un valor válido.'", () => {
    const moreThanOneSpaceString = "   ";
    const expectedResult =
      "Recuerda que únicamente espacios no se consideran un valor válido.";
    const sut = validateInput(moreThanOneSpaceString);

    expect(sut).toBe(expectedResult);
  });

  it("validateInput('21*') should return, \"Recuerda que los símbolos no están permitidos.\"", () => {
    const symbolString = "21*";
    const expectedResult = "Recuerda que los símbolos no están permitidos.";
    const sut = validateInput(symbolString);

    expect(sut).toBe(expectedResult);
  });
  it("validateInput('353') should return, null", () => {
    const numberString = "353";
    const expectedResult = null;
    const sut = validateInput(numberString);

    expect(sut).toBe(expectedResult);
  });
  it("validateInput('pelota') should return, null", () => {
    const wordString = "pelota";
    const expectedResult = null;
    const sut = validateInput(wordString);

    expect(sut).toBe(expectedResult);
  });

});

describe("cleanInput(input)", () => {
    it("cleanInput() to be defined", () => {
        expect(cleanInput).toBeDefined();
    })
    it("cleanInput('coco') should return,\'coco'\'", () => {
        const simpleWord = 'coco';

        expect(cleanInput(simpleWord)).toBe(simpleWord);
    })
    it("cleanInput('pATata') should return,\'patata'\'", () => {
        const wordWithUpperCase = 'pATata';
        const expectedResult = 'patata';
        const sut = cleanInput(wordWithUpperCase);

        expect(sut).toBe(expectedResult);
    })
    it("cleanInput('ca racol') should return,\'caracol\'", () => {
        const wordWithSpace = 'ca racol';
        const expectedResult = 'caracol';
        const sut = cleanInput(wordWithSpace);

        expect(sut).toBe(expectedResult);
    })
    it("cleanInput('rOSs INY Ol') should return,\'rossinyol\'", () => {
        const wordWithUpperCaseAndSpace = 'rOSs INY Ol';
        const expectedResult = 'rossinyol';
        const sut = cleanInput(wordWithUpperCaseAndSpace);

        expect(sut).toBe(expectedResult);
    })
    it("cleanInput('35 78 9') should return,\'35789\'", () => {
        const numberWithSpace = '35 78 9';
        const expectedResult = '35789';
        const sut = cleanInput(numberWithSpace);

        expect(sut).toBe(expectedResult);
    })
});

describe("checkInputType(input)", () => {
    it('checkInputType() to be defined', () => {
        expect(checkInputType).toBeDefined();
    })
    it("checkInputType('365') should return, 'number'", () => {
        const number = '365';
        const expectedResult = 'number';
        const sut = checkInputType(number);

        expect(sut).toBe(expectedResult);
    })
    it("checkInputType('fifa') should return,'string'", () => {
        const word = 'fifa';
        const expectedResult = 'string';
        const sut = checkInputType(word);

        expect(sut).toBe(expectedResult);
    })
    it("checkInputType('57tatto') should return,'string'", () => {
        const wordPlusNumber = '57tatto';
        const expectedResult = 'string';
        const sut = checkInputType(wordPlusNumber);

        expect(sut).toBe(expectedResult);
    })
})

describe("isPalindrome(input)", () => {

    it("isPalindrome() to be defined", () =>{
        expect(isPalindrome).toBeDefined();
    })
    it("isPalindrome('pato') should return, false", () =>{
        const word = 'pato';
        const expectedResult = false;
        const sut = isPalindrome(word);

        expect(sut).toBe(expectedResult);
    })
    it("isPalindrome('kayak') should return, true", () =>{
        const palindrome = 'kayak';
        const expectedResult = true;
        const sut = isPalindrome(palindrome);

        expect(sut).toBe(expectedResult);
    })
    it("isPalindrome('187') should return, false", () => {
        const number = '187';
        const expectedResult = false;
        const sut = isPalindrome(number);

        expect(sut).toBe(expectedResult);
    })
    it("isPalindrome('424') should return, true", () => {
        const capicua = '424';
        const expectedResult = true;
        const sut = isPalindrome(capicua);

        expect(sut).toBe(expectedResult);
    })
    it("isPalindrome('121oso121') should return, true", () => {
        const palindromeMixed ='121oso121';
        const expectedResult = true;
        const sut = isPalindrome(palindromeMixed);

        expect(sut).toBe(expectedResult);
    })

})

describe("checkPalindrome(input)", () => {
    it("checkPalindrome() to be defined", () => {
        expect(checkPalindrome).toBeDefined();
    })
    it("checkPalindrome('54245') should return, '54245 ES CAPICÚA!!'", () => {
        const capicua = '54245';
        const expectedResult =`${capicua} ES CAPICÚA!!`;
        const sut = checkPalindrome(capicua);

        expect(sut).toBe(expectedResult);
    })
    it("checkPalindrome('21') should return, '21 NO ES CAPICÚA!!'", () => {
        const number = '21';
        const expectedResult =`${number} NO ES CAPICÚA!!`;
        const sut = checkPalindrome(number);

        expect(sut).toBe(expectedResult);
    })
    it("checkPalindrome('coro') should return, 'coro NO ES PALÍNDROMA!!'", () => {
        const word = 'coro';
        const expectedResult =`${word} NO ES PALÍNDROMA!!`;
        const sut = checkPalindrome(word);

        expect(sut).toBe(expectedResult);
    })
    it("checkPalindrome('oso') should return, 'oso ES PALÍNDROMA!!'", () => {
        const palindrome = 'oso';
        const expectedResult =`${palindrome} ES PALÍNDROMA!!`;
        const sut = checkPalindrome(palindrome);

        expect(sut).toBe(expectedResult);
    })
    it("checkPalindrome('21uomo') should return, '21uomo NO ES PALÍNDROMA!!'", () => {
        const alphaNumeric = '21uomo';
        const expectedResult =`${alphaNumeric} NO ES PALÍNDROMA!!`;
        const sut = checkPalindrome(alphaNumeric);

        expect(sut).toBe(expectedResult);
    })
    it("checkPalindrome('121kayak121') should return, '121kayak121 ES PALÍNDROMA!!'", () => {
        const alphaNumericPalindrome = '121kayak121';
        const expectedResult =`${alphaNumericPalindrome} ES PALÍNDROMA!!`;
        const sut = checkPalindrome(alphaNumericPalindrome);

        expect(sut).toBe(expectedResult);
    })
})