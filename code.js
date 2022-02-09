// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
//    if (input === "Alex") {
//        return "Hello, Alex!";
//    } else if (input === "Pat") {
//        return "Hello, Pat!";
//    } else {
//        return "Hello, Jane!";
//    }

//    if (input === undefined || input === true || input === false) {
//        return "Hello, World!";
//    } else {
//        return "Hello, " + input + "!";
//    }
    if(input === typeof(Boolean) || input === typeof(Number) || input === "" || input === null || input === undefined) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
    // if (typeof input !== "string" || isNaN(input))
}

function isFive(num) {
    if (num == 5 || num === 'five') {
        return true;
    } else {
        return false;
    }
}

function isEven(num1) {
    if (num1 % 2 === 0) {
        return true;
    } else if (typeof num1 === "boolean") {
        return false;
    } else {
        return false;
    }
}

/*
function isVowel(input1) {
    input1 = input1.toLowerCase();
    let listOfVowels = 'aeiou'
    //([ 'a' || 'e' || 'i' || 'o' || 'u']) {
    if (listOfVowels.includes(input1)) {
        return true;
     } else {
        return false;
}
 */
/*
function add(input2, input3) {
    if (isNaN(input2) || isNaN(input3)) {
        return false;
    } else {
        return parseInt(input2) + parseInt(input3);
    }
}
 */