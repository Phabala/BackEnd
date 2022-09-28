// 여기에서 불러온다.
/*
girl_group, song table에 대한 db-module, db-test 만들어서
본인이름.zip으로 제출하세요.

1. 걸그룹 리스트 조회
    gid, 걸그룹 이름, 데뷔일, 히트곡명

2. 송 리스트 조회
    sid, 노래제목, 가사, 걸그룹명

3. 걸그룹 검색(gid로)
    gid, 걸그룹 이름, 데뷔일, 히트곡명

4. 송 검색(sid로)
    sid, 노래제목, 가사, 걸그룹명
    
5. 걸그룹 추가
6. 걸그룹 수정
7. 걸그룹 삭제
8. 송 추가
9. 송 수정
10. 송 삭제
*/

const dm = require('./db-module');

dm.getListGirlGroup(rows => {
    for (let row of rows) {
        console.log(row.gid, row.name, row.debut, row.hit_song_id)
    }
});

dm.getListSong(rows => {
    for (let row of rows) {
        console.log(row.sid, row.title, row.lyrics)
    }
});

dm.searchGirlGroup(1015, rows => {
    for (let row of rows) {
        console.log(row.gid, row.name, row.debut, row.hit_song_id)
    }
});

dm.searchSong(105, rows => {
    for (let row of rows) {
        console.log(row.sid, row.title, row.lyrics)
    }
});

dm.insertGirlGroup(['girl_group테스트', '2022-09-28', '9999'], () => {
    dm.getListGirlGroup(rows => {
        for (let row of rows) {
            console.log(row.gid, row.name, row.debut, row.hit_song_id)
        }
    });
});

dm.insertSong(['song테스트', 'Ipsem Lorum'], () => {
    dm.searchSong(105, rows => {
        for (let row of rows) {
            console.log(row.sid, row.title, row.lyrics)
        }
    });
});