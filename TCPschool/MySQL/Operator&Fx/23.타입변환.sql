/*
MySQL은 비교나 검색을 수행할 때 데이터의 타입이 서로 다를 경우, 내부적으로 타입이 같아지도록 자동 변환하여 처리한다.
하지만 사용자가 명시적으로 타입을 변환할 수 있도록 다양한 연산자와 함수도 같이 제공하고 있다.
*/

-- 1. BINARY
-- 2. CAST()
-- 3. CONVERT()


/* BINARY
뒤에 오는 문자열을 바이너리 문자열로 변환한다.
문자가 아닌 바이트를 기준으로 하여 비교나 검색 작업을 수행할 수 있다.

다음 예제는 BINARY 연산자를 이용하여 'a'와 'A'를 비교하는 예제다.
*/

SELECT BINARY 'a' = 'A', 'a' = 'A';
--binary a와 A는 다른 문자지만, a와 A는 같은 값이다.

/* CAST
*/
-- CAST(expr AS type)
SELECT 4 / '2';
4 / 2,
4 / CAST('2' AS UNSIGNED);