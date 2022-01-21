# INDEX

많은 데이터가 있는 테이블에서 검색할 때 빠르게 찾을 수 있도록 해주는 기능


예제
```sql
use employees
select * from salaries;
```

## 인덱스 확인

```sql
show index from salaries;
```
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/80f0008f-ef96-46ba-90ca-63de178d95ef/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210316T014228Z&X-Amz-Expires=86400&X-Amz-Signature=fa011bebb18f2ad0eb30e268ddd2a4082c31ee1997278535f4abe4c21e8c3dff&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

## 인덱스 종류

```sql
select *
from salaries
where from_date < "1986-01-01"; # 29ms
```
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/aaba4db3-ec7c-4b1c-85e3-4d4d5965c009/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210316T014327Z&X-Amz-Expires=86400&X-Amz-Signature=57a0de05a1081e82a12a47da255c4c59e628584b2a4d2c1ebf4e0b8173d1f140&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

```sql
select *
from salaries
where to_date < "1995-01-01"; # 12.5ms
```

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2c113fe5-4c9d-4981-8427-7c1fc2fa022d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210316T014415Z&X-Amz-Expires=86400&X-Amz-Signature=e144b4624c6302b978b1455151f94e54579961642e54a4724ff3b81a13d938b7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)


실행계획 확인

```sql
explain
select *
from salaries
where to_date < "1995-01-01";
```
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d3d6bb14-ac2c-4aa9-b97e-f722268b764d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210316T014804Z&X-Amz-Expires=86400&X-Amz-Signature=2103ff1ebe6fe6061f7dc8566d9487d29095455126b0ce4a17eeb93bc6615ccd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)


인덱스 설정

```sql
create index tdate on salaries(to_date);
show index from salaries;
```

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2ed45165-485e-4c2b-96a5-9115f2a669d5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210316T014821Z&X-Amz-Expires=86400&X-Amz-Signature=7bf20fef0a735929c20bdf4ee3280286e74609381da2f1b16cd867e986e47d36&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)


① 클러스터형

②

## 인덱스 삭제

```sql
drop index tdate on salaries;
```

실행계획 확인

```sql
explain
select *
from salaries
where to_date < "1986-01-01";
```

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/780b92c4-3e20-425d-a19c-bf0c3f39c87b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210316T020423Z&X-Amz-Expires=86400&X-Amz-Signature=13cf11f596ee53e9f79778d2cc98d3c1e90e056824f90cb588f03fe6e4e92799&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

1.22 sec → 9.3ms


