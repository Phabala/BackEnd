// Node.js 는 process 전역 객체를 제공
// process 객체는 프로세스 정보를 제공하며, 제어할 수 있게 하는 객체

const { memoryUsage } = require("process")

console.log('------process 객체의 속성------')
console.log('env: 컴퓨터 환경 정보를 나타냅니다.', process.env)
console.log('version: Node.js 버전을 나타냅니다.', process.version)
console.log('versions: Node.js 와 종속된 프로그램 버전을 나타냅니다.', process.versions)
console.log('arch: 프로세서의 아키텍쳐를 나타냅니다.', process.arch)
console.log('platform: 플랫폼을 나타냅니다.', process.platform, '\n')

console.log('------process 객체의 메소드------')
console.log('exit([exitCode=0]): 프로그램을 종료합니다.')
console.log('memoryUsage(): 메모리 사용 정보 객체를 리턴합니다.', process.memoryUsage())
console.log('uptime(): 현재 프로그램이 실행된 시간을 리턴합니다.', process.uptime())

console.log('프로세스의 메소드들: arch, platform, connected, execArgv, exitCode, mainModule, release, memoryUsage, uptime')