-- MySQL 에서는 SELECT 문을 사용하여 테이블의 레코드를 선택할 수 있습니다.
SELECT 필드이름
FROM 테이블이름
[WHERE 조건]

-- 테이블의 모든 필드 선택
SELECT *
FROM 테이블이름

SELECT *
FROM Reservation
WHERE ID <= 3 
AND ReserveDate > '2016-02-01';

SELECT *
FROM Reservation
WHERE ID > 1 
AND ID < 4;

-- 특정 필드만을 선택
-- SELECT 키워드 다음에 필드 이름을 명시하면, 해당 테이블의 특정 필드만을 불러올 수 있다.
-- 이때 쉼표(,)를 사용하여 여러 개의 필드 이름을 한 번에 명시할 수 있다.

-- 다음 예제는 Reservation 테이블에서 Name 필드와 RoomNum 필드만을 선택하는 예제이다.
SELECT Name, RoomNum
FROM Reservation;

-- WHERE 문을 사용한다면
SELECT Name, ReserveDate 
FROM Reservation
WHERE ID <= 3 
AND ReserveDate > '2016-02-01';

-- 중복값 표시 안함
SELECT DISTINCT Name
FROM Reservation;

-- 선택한 결과 정렬 (ORDER BY)
SELECT * 
FROM Reservation
ORDER BY ReserveDate [내림차순: DESC];

/*
PHP에서 문자열 타입을 데이터로 가지는 필드를 정렬할 때는 기본적으로 대소문자를 구분하지 않는다.
하지만 대소문자까지 구분하여 정렬하고 싶을 때는 ORDER BY BINARY 절을 사용하면 된다.
또한, 여러 필드의 데이트를 쉼표(,)를 사용하여 한 번에 정렬할 수 도 있다.
*/

-- Reservation 테이블의 모든 레코드를 먼저 ReserveDate 필드의 내림차순으로 정렬한 뒤에
-- 또다시 RoomNum 필드의 오름차순 정렬하여 선택하는 예제.

SELECT *
FROM Reservation
ORDER BY ReserveDate DESC, RoomNum ASC;

-- 별칭(alias)을 이용한 처리: 좀더 읽기 쉽게 만들어줌.
SELECT 필드이름 AS 별칭 --1
FROM 테이블이름;

SELECT 필드이름 --2
FROM 테이블이름 AS 별칭;

--예제
SELECT ReserveDate, CONCAT(Room, " : ", Name) AS ReserveInfo
FROM Reservation;