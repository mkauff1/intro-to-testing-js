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
}

function isFive(num) {
    if (num == 5) {
        return true;
    } else {
        return false;
    }
}