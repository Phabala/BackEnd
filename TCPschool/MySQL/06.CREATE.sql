-- CREATE DATABASE // 데이터베이스 만들기
-- CREATE TABLE // 테이블 만들기

CREATE TABLE Test
(
    ID INT,
    Name VARCHAR(30),
    ReserveDate DATE,
    RoomNum INT
);

/*
제약조건(constraint):
데이터의 무결성을 지키기 위해 데이터를 입력받을 때 실행되는 검사 규칙.
CREATE 문으로 테이블을 만들거나 ALTTER 문으로 필드를 추가할 때 설정할 수 있음.

NOT ULL: 해당 필드는 NULL 값을 저장할 수 없게 됨.
UNIQUE: 해당 필드는 서로 다른 값을 가져야만 함.
PRIMARY KEY: 해당 필드가 NOT NULL과 UNIQUE 제약 조건의 특징을 모두 갖게 됨.
FOREIGN KEY: 하나의 테이블을 다른 테이블에 의존하게 만듦.
DEFAULT: 해당 필드의 기본값을 설정함.

또한, AUTO_INCREMENT 키워드를 사용하면 해당 필드의 값을 1부터 시작하여 새로운 레코드가
추가될 때 마다 1씩 증가된 값을 저장한다. 이때 AUTO_INCREMENT 키워드 다음에 대입 연산자(=)
를 사용하여 시작값을 변경할 수 있다.
*/