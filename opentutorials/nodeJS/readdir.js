var testFolder = '../../opentutorials/web2_nodejs/data'; // 파일을 실행하는 위치를 기준으로 패스 설정
// 나는 nodeJS 파일에서 실행하였다.
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist) {
    console.log(filelist);
})