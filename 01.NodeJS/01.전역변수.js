const path = require('path');

console.log(__dirname);     //프로그램이 존재하는 디렉토리 위치
console.log(__filename);    //프로그램의 파일 이름

//상대 경로(relative path)
const relPath = 'tmp/textfile.txt';

//절대 경로(absolute path)
const absPath = path.join(__dirname, 'tmp', 'textfile.txt'); //path.join은 매개변수들을 경로로 합쳐줌     //디렉토리 위치, 폴더 명, 파일 명 
console.log(absPath);