-- ALTER DATABASE
-- ALTER TABLE

-- ALTER DATABASE 문은 데이터베이스의 전체적인 특성을 수정할 수 있게 해준다.
-- 이러한 데이터베이스의 특성은 데이터베이스 디렉터리의 db.opt 파일에 저자오디어 있다.

ALTER DATABASE 데이터베이스이름 CHARACTER SET=문자집합이름
ALTER DATABASE 데이터베이스이름 COLLATE=콜레이션이름
-- 콜레이션이란 데이터베이스에서 검색이나 정렬과 같은 작업을 할 때 사용하는 비교를 위한 규칙의 집합을 의미한다.

-- Hotel 데이터베이스 문자 집합과 콜레이션을 변경하는 예제:
ALTER DATABASE Hotel CHARACTER SET=euckr_bin COLLATE=euckr_korean_ci; -- 왜 CHARACTER SET 은 안될까? 다른거로 하니까 된다.

-- 테이블 수정:
-- ALTER TABLE 문은 테이블에 필드를 추가, 삭제하거나 필드의 타입을 변경할 수 있게 해줍니다.
/*
ADD
DROP
MODIFY COLUMN
*/