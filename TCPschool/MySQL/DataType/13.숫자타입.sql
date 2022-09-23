-- http://www.tcpschool.com/mysql/mysql_datatype_numeric
-- 정수 타입(integer types)
/*
TINYINT 1바이트 -128 ~ 127 (unsigned: 255)
SAMLLINT 2바이트 -32768 ~ 32767 (unsigned: 65535)
MEDIUMINT 3바이트 -8388608 ~ 8388607 (unsigned: 16777215)

INT 4바이트 -2147483648 ~ 2147483647 (unsigned: 4294967295)
BIGINT 8바이트 -9223372036854775808 ~ 9223372036854775807 (18446744073709551615)
*/

-- 고정 소수점 타입(fixed-point types)
/*
MySQL에서 DECIMAL은 고정 소수점 타입이다.
DECIMAL에서 사용하는 고정 소수점 방식은,
실수를 표현할 때 소수부의 자릿수를 고정하여 표현합니다.
즉, 소수부의 자릿수를 미리 정해놓고, 고정된 자릿수로만 소수 부분을 표현하는 방식이다.

MySQL에서 DECIMAL 타입은 NUMERIC을 구현하여 만들어졌다.
따라서 대부분의 경우 DECIMAL 대신 NUMERIC을 사용해도 똑같이 동작한다.
*/

-- M은 소수 부분을 포함한 실수의 총 자릿수를 나타내며, 최댓값은 65이다.
-- D는 소수 부분의 자릿수를 나타내며, D가 0이면 소수 부분을 가지지 않는다.
DECIMAL(M, D)

--예제, RoomNum 필드는 -99999.99부터 99999.99 까지의 실수를 저장할 수 있도록 변경됨.
ALTER TABLE Reservation
MODIFY COLUMN RoomNum DECIMAL(7, 2);

--부동 소수점 타입(floating-point types)
/*
MySQL에서 부동 소수점 타입인 FLOAT과 DOUBLE은 실수의 값을 대략적으로 표현하기 위해 사용된다.
MySQL은 IEEE 754표준에 따라 FLOAT은 4바이트를 사용하며, DOUBLE은 8바이트를 사용한다.

SQL 표준에서 FLOAT은 정밀도에 따라 최소한의 비트 수를 명시할 수 있다.
*/
FLOAT(P)

-- P가 0부터 24까지의 값을 가질 때는 FLOAT 값으로 취급되며, 25부터 53까지의 값을 가질 때는 DOUBLE 값으로 취급됩니다.
-- 또한, MySQL은 FLOAT과 DOUBLE을 고정 소수점 타입과 같이 사용할 수 있는 비표준 문법도 지원한다.
FLOAT(M, D)
DOUBLE(M, D)

--비트값 타입(bit-value type)
BIT(M) -- 0과 1로 구성되는 binary 값을 저장한다.
-- M의 범위는 1부터 64까지, 명시한 M비트의 값을 저장할 수 있다.