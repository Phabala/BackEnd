const fs = require('fs');

// 디렉토리에 있는 파일 목록 알아내기
fs.readdirSync('tmp', (err, files) => {
    console.log(files);
});

// 파일의 정보(stat) 알아내기
fs.stat('tmp/textfile.txt', (err, stats) => {
    console.log(stats.mtime); // 최종 수정 시간
    console.log(stats.size); // 파일의 크기
});

// 디렉토리에 있는 파일에 대하여 최종 수정시간, 파일의 크기, 파일 이름 표시

var dir = 'tmp/';

fs.readdir(dir, function(err, files){
  files = files.map(function (fileName) {
    return {
      name: fileName,
      time: fs.statSync(dir + '/' + fileName).mtime.getTime()
    };
  })
  .sort(function (a, b) {
    return a.time - b.time; })
  .map(function (v) {
    return v.name; });
});  

Promise.resolve()
  .then(() => getSortedFiles(dir))
  .then(() => getSortedFiles(time))
  .then(console.log)
  .catch(console.error);
