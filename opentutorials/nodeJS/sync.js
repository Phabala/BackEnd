var fs = require('fs');

/*
// readFileSync
console.log('A');
var result = fs.readFileSync('opentutorials/nodeJS/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

// sync는 return 값을 주는데, 그냥 readFile 은 아니다.

console.log('A');
fs.readFile('opentutorials/nodeJS/sample.txt', 'utf8', function(err, result) { // 비동기 (sync는 동기)
    console.log(result); // 파일을 readFile이 읽고, 나중에 function(){} 을 호출한다. --> callback
});
console.log('C');

// 성능위주: 비동기, 코드가 너무 길고 복잡한데 성능이 크게 필요하지 않다: 동기