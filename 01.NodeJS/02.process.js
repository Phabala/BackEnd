console.clear(); // 위의 명령어들이 clear됨. 임의로 맨 위로 올려놓겠음.
console.log('process.eng:', process.env); // 환경 설정
console.log(process.env.COMPUTERNAME);

console.log('process.version:', process.version); // NodeJS version
console.log('process.arch:', process.arch);
console.log('process.platform:', process.platform);
console.log('process.argv:', process.argv);

process.exit();
console.log('실행이 안되는 프로세스');

function fx () {
    console.log('fx함수 실행')
    let a = 2; // rechable

    
    return a;
    let b = 3; // unrechable
}