var args = process.argv;
console.log(args);

console.log('A');
console.log('B');

if (args[2] === '1') {
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D');

/* 
[
  '/home/gihong/.nvm/versions/node/v18.9.0/bin/node', --> nodejs 런타임이 어디에 위치 하느냐
  '/mnt/c/Dev/Web/BackEnd/01.NodeJS/opentutorials/nodeJS/input.js' --> 실행시킨 파일의 경로
]
*/

/* 만약 콭솔에 node input.js Phabala k880 이라고 입력한다면
[
  '/home/gihong/.nvm/versions/node/v18.9.0/bin/node',
  '/mnt/c/Dev/Web/BackEnd/01.NodeJS/opentutorials/nodeJS/input.js',
  'Phabala',
  'k880'
]
*/