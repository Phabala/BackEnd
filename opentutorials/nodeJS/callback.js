/*
function a() {
    console.log('A');
}
*/
var a = function() { // 익명함수 (자바스크립트에서는 함수가 값이다.)
    console.log('A');
}

function slowfunc(callback) { // 굉장히 오래 걸리는 함수라고 쳐보자.
    callback();
}

// callback이라는 매개변수(parameter)는 함수 a를 인자(argument)로 갖는다.
console.log('b');
slowfunc(a);