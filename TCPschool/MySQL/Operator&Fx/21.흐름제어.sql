/* 흐름 제어: MySQL은 프로그램의 순차적인 흐름을 제어해야 할 때 사용할 수 있는 다양한 연산자와 함수를 제공합니다.
1. CASE
2. IF()
3. IFNULL()
4. NULLIF()
*/


/* CASE */
-- 1
CASE value
    WHEN [compare_value] THEN result
    [WHEN [compare_value] THEN reuslt] ...
    [ELSE result]
END

-- 2
CASE
    WHEN [condition] THEN result
    [WHEN [condition] THEN result] ...
    [ELSE result]
END

-- 예제
SELECT CASE 0
    WHEN 0 THEN 'zero'
    WHEN 1 THEN 'one'
    ELSE 'more'
END;

/* IF */
IF(expr1, expr2, expr3) -- 만약 expr1이 참이면 expr2, 거짓이면 expr3을 반환.

-- 예제
SELECT IF(0 < 1, 'yes', 'no')

/* IFNULL() */
IFNULL(expr1, expr2) -- 만약 expr1의 값이 NULL이 아니면 expr1 그 자체를 반환, NULL이면 expr2 반환.

-- 예제
SELECT IFNULL(NULL, '전달받은 값이 NULL입니다.');

/* NULLIF() */
NULLIF(expr1, expr2) -- 인수로 전달받은 두 값이 서로 같은지를 검사하여 다른 값을 반환한다.
                    -- 만약 expr1과 expr2의 값이 서로 같으면 NULL을 반환하고, 같지 않으면 expr1을 반환한다.

-- 예제
SELECT NULLIF(3, 3);
-- 위 예제는 다음과 같은 동작을 수행한다. (왜 밑의 코드가 에러가 나는지는 잘 모르겠다.)
CASE
    WHEN expr1 = expr2
    THEN NULL
    ELSE expr1
END;