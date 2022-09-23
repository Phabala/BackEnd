-- 기타 자세한건 http://www.tcpschool.com/mysql/mysql_datatype_string

-- BLOB과 TEXT : 다양하고 큰 binary와 text 값들을 가질 수 있음.
-- ENUM: 미리 정의한 집합 안의 요소중 하나만 저장할 수 있음. 최대 65535개.

ALTER TABLE Reservation
ADD COLUMN RoomType ENUM('Single', 'Twin', 'Double', 'Triple');

--SET: 미리 정의한 집합 안의 요소 중 여러 개를 동시에 저장할 수 있는 타입.
--SET 목록 집합은 최대 64개의 SET 데이터를 포함할 수 있음.
ALTER TABLE Reservation
ADD COLUMN Request SET('Breakfast', 'Extra Bed', 'Non-Smoking'); -- 3개의 값 중 여러개를 가질 수 있음.

