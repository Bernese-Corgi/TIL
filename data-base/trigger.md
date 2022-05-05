# TRIGGER

특정 테이블의 특정 조건을 감시하고 있다가 감지되면 미리 설정해놓은 쿼리가 실행

예제
```sql
create database tr;
use tr;
```
테이블 2개 생성 : chat, backup

① chat

```sql
create table chat(
  chat_id int primary key auto_increment,
  msg varchar(100) not null
)
```

② backup

```sql
create table backup(
  backup_id int primary key auto_increment,
  backup_msg varchar(100) not null
  backup_date timestamp default current_timestamp
)
```

## 트리거 생성

옵션 생성
```sql
create trigger <name>
{before | after} {insert | update | delete}
on <table name> for each row
begin
trigger query;
end;
```

예제
```sql

```

세미콜론 두개 쓰기 때문에 delimiter 사용 `|`

`|` 이 시점에서 


```sql
delimiter |
create trigger backup_tr
before delete on chat # 삭제하기 전의 데이터
for each row begin
	insert into backup(backup_msg)
    value(old.msg); # old, new 둘다 가능
end |

show triggers;
```
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b594f2c6-300a-4286-a355-9a63957de94c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210316T022018Z&X-Amz-Expires=86400&X-Amz-Signature=aa2d0e9301c4d061f36da268e71557fcc5ce25fa83eed119dd294606fcfab20f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

```sql
insert into chat(msg) values ("hello"), ("hi"), ("hello!!!");
select * from chat;
```
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5b711046-c833-4cb6-b1ec-b952d217189d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210316T022123Z&X-Amz-Expires=86400&X-Amz-Signature=a6bb2db37ee19a0eb27b0c1bbd83da9dd2e590da029c5452f9908818684060cb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

```sql
delete from chat
where msg like "hello%"
limit 10;
```

```sql
select * from chat;
```

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2f276ddc-768f-47f3-ba8d-23ab3ff313f3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210316T022337Z&X-Amz-Expires=86400&X-Amz-Signature=ed54f2ef5ca7f5c90591247710dd327ce5b9cc87d59f136849f5c8eb145a611d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

```sql
select * from backup;
```

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e2dc5c54-1438-4ec8-b96b-9b5a88b96ada/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210316T022339Z&X-Amz-Expires=86400&X-Amz-Signature=9e73ca6080e6ae6511cc82306f1ba750e434eaf8e0caa42ef17630c8372e3db4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

