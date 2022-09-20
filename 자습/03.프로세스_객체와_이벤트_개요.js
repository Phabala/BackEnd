const process = require('process');

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`); // eventName 'exit'의 eventHandler 가 0이 되면 함수 실행 (이 설명이 맞나? 이건 여기보다 심화된걸 배울 때 알 수 있을 것 같다.)
});

// exit 이벤트를 연결합니다.
process.on('exit', () => {
    console.log('프로세스가 종료되었습니다.');
});

// uncaughtException 이벤트를 연결합니다.
process.on('uncaughtException', () => {
    console.log('예외가 발생했습니다.')
})

// 예외를 강제로 발생시킵니다.
error.error.error();

// Node.js가 제공하는 객체의 이벤트: https://nodejs.org/en/docs/
// process 객체: https://nodejs.org/dist/latest-v18.x/docs/api/process.html