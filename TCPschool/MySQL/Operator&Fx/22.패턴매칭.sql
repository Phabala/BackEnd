/* 패턴 매칭(pattern matching)
MySQL은 데이터의 특정 패턴을 검색하기 위한 다음과 같은 패턴 매칭 연산자를 제공한다.
1. LIKE
2. REGEXP

또한, 임의의 문자나 문자열을 대체하기 위해서 와일드카드 (wildcard) 문자를 사용할 수도 있다.
*/

-- LIKE: LIKE 연산자는 특정 패턴을 포함하는 데이터만을 검색하기 위해 사용한다.

    --Reservation 테이블에서 '장'으로 시작하는 이름(Name)으로 예약한 레코드를 선택하는 예제입니다.
SELECT * FROM Reservation
WHERE Name LIKE '장%'; -- '%'는 0개 이상의 문자라는 의미의 와일드카드(wildcard) 문자다.

    -- Reservation 테이블에서 '장'으로 시작하지 않는 이름(Name)으로 예약한 레코드를 선택하는 예제.
SELECT * FROM Reservation
WHERE Name NOT LIKE '장%';

-- 와일드카드(wildcard)란 문자열 내에서 임의의 문자나 문자열을 대체하기 위해 사용되는 기호를 의미한다.
/*
1. '%' 0개 이상의 문자를 대체함.
2. '_' 1개 이상의 문자를 대체함.
*/

-- '_' 예제
SELECT * FROM Reservation
WHERE RoomNum LIKE '20__'; -- RoomNum 필드의 값이 200이나 20000인 레코드는 선택되지 않는다.

-- REGEXP (정규표현식)
/*
LIKE 연산자보다 더욱 복잡한 패턴을 검색하고 싶을 때는 REGEXP 연산자를 사용할 수 있다.
REGEXP 연산자는 정규 표현식을 토대로 하는 패턴 매칭 연산을 제공합니다.

.	줄 바꿈 문자(\n)를 제외한 임의의 한 문자를 의미함.
*	해당 문자 패턴이 0번 이상 반복됨.
+	해당 문자 패턴이 1번 이상 반복됨.
^	문자열의 처음을 의미함.
$	문자열의 끝을 의미함.
|	선택을 의미함.(OR)
[...]	괄호([]) 안에 있는 어떠한 문자를 의미함.
[^...]	괄호([]) 안에 있지 않은 어떠한 문자를 의미함.
{n}	반복되는 횟수를 지정함.
{m,n}	반복되는 횟수의 최솟값과 최댓값을 지정함.

*/

SELECT * FROM Reservation
WHERE Name REGEXP '^홍|산$'; -- 홍으로 시작하거나 산으로 끝나는 것

SELECT * FROM Reservation
WHERE Name NOT REGEXP '^홍|산$'; -- 반대되는 것