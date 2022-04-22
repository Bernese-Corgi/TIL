# MongoDB

# MongoDB 설치 및 설정

<span style="background-color: linen">**1. 몽고디비 설치**</span>

```bash
$ sudo apt install -y mongodb
```

- `-y` 옵션 : 설치 도중 y/n 뜰 때 모두 yes로 설정하는 것

<br>

<span style="background-color: linen">**2. 외부 접속 설정**</span>

```bash
$ sudo vi /etc/mongodb.conf
```

- `#port = 27017` 디폴드 값이 27017이라는 뜻 (주석처리 되어있지만, 디폴트는 이거다 하고 표시해준것)

- `auth = true` : id/password가 필요하다는 설정

<br>

<span style="background-color: linen">**3. admin 계정 설정**</span>


MongoDB를 설치하면 최초에 authentication이 없다.

비밀번호나 id없이 접속하여 어떤 database에도 접근할수 있고 심지어 admin database에도 접근 가능하다. 

따라서 명시적으로 계정과 비밀번호를 만들고, authentication option을 enable해주어야 한다.

**① mongo shell에 접속**
```bash
$ mongo
```

<br>

**② admin 계정 설정**

```bash
> use admin
> db.createUser({ user: "fds", pwd: "fdspw", roles: [ "root" ] })
> quit()
```

- admin에 user 및 password 데이터베이스 생성
- `quit()` : mongo shell 종료

<br>
  
**③ 몽고디비 재시작**

```bash
$ sudo systemctl restart mongodb
```

<br>

<span style="background-color: linen">**4. Install Robomongo**</span>

ROBO 3T 다운로드 후 설치

<br>

<span style="background-color: linen">**5. Connection**</span>

MongoDB Connections에서 ip를 입력하여 서버의 mongoDB에 접속
<img src="https://user-images.githubusercontent.com/72931773/111261940-a2bccb00-8666-11eb-8c20-9c193a45ee68.png" width="60%">
<img src="https://user-images.githubusercontent.com/72931773/111262032-d7c91d80-8666-11eb-83bf-0b2ae5d4288a.png" width="60%">

<br>

---

# Basic Syntax

## 1. Database

### 1.1. Create Database

<span style="background-color: linen">**① shell 열기**</span>

<img src="https://user-images.githubusercontent.com/72931773/111263958-13191b80-866a-11eb-8d11-23b7c973dce7.png" width="50%">

<br>

<span style="background-color: linen">**② 데이터 베이스 생성**</span>

mongo 라는 이름의 데이터 베이스 생성 ↯
```shell
use mongo
```


현재 사용중인 데이터 베이스 확인 ↯

```shell
db
```

database list 확인 ↯
```shell
show dbs
```
- 데이터 베에스를 생성후에 최소 1개이상의 document를 추가해야 생성된 데이터 베이스가 보입니다.

<span style="background-color: linen">**③ document 생성**</span>


```shell
db.user.insert({"name": "alice", "age": 20, "email": ""})
```

<span style="background-color: linen">**④ 데이터 insert 후 데이터 확인**</span>

<img src="https://user-images.githubusercontent.com/72931773/111264167-64c1a600-866a-11eb-8b1f-b790bf476215.png" width="40%">

↓ refresh 하면 insert한 데이터가 사이드바에 생긴다.

<img src="https://user-images.githubusercontent.com/72931773/111264038-33e17100-866a-11eb-979c-0d0776867a59.png" width="80%">

collection 안에 user 클릭하면 생성된 데이터를 테이블로 확인 가능

<img src="https://user-images.githubusercontent.com/72931773/111264123-507da900-866a-11eb-81b7-ff7296cf4c83.png" width="80%">

### 1.2. Delete Database

현재 사용중인 데이터 베이스 삭제

```shell
db.dropDatabase()
```

## 2. Collection

### 2.1. Create Collection

```shell
db.createCollection(name, {options})
```

```shell
db.createCollection(<name>, { capped: <boolean>,
                              autoIndexId: <boolean>,
                              size: <number>,
                              max: <number>,
                              storageEngine: <document>,
                              validator: <document>,
                              validationLevel: <string>,
                              validationAction: <string>,
                              indexOptionDefaults: <document>,
                              viewOn: <string>,
                              pipeline: <pipeline>,
                              collation: <document> } )
```

**`name`** : collection 이름


**`{options}`**


① `capped: true`
- 최대 용량 설정 가능
- true로 설정하면 collection의 최대 용량을 설정 (최대 용량의 크기는 size 옵션으로설정)
- 설정된 최대용량 이상으로 데이터가 입력되면 오래된 데이터 부터 자동으로 삭제됩니다.

② `size` : 숫자 데이터를 사용하며 collection의 최대 사이즈를 byte 단위로 지정

③ `max` : 숫자 데이터를 사용하며 최대 document 갯수를 설정

④ `autoIndex: true` : true로 설정하면 _id 필드에 index가 자동으로 생성됩니다.


<span style="background-color: lavender">**예제**</span>

autoIndex와 max 옵션을 설정하여 info 컬렉션을 생성

collection의 `size` 를 각각 500, 50byte로 설정

```shell
db.createCollection("info1", {autoIndexId: true, capped: true, size: 500, max:5})
db.createCollection("info2", {autoIndexId: true, capped: true, size: 50, max:5})
```


### 2.2 show collections

컬렉션 리스트 확인

```shell
show collections
```
<img src="https://user-images.githubusercontent.com/72931773/111264908-ac94fd00-866b-11eb-9350-8930497f4735.png" width="">

## 3. Document

### 3.1. Insert

컬렉션에 Document 추가

```shell
db.<collection_name>.insert(<document>)
```

<span style="background-color: lavender">**예제**</span>


```shell
db.info1.insert({subject: "python", level: 3})
db.info1.insert({subject: "web", level: 2})
db.info1.insert({subject: "sql", level: 1})
```

<img src="https://user-images.githubusercontent.com/72931773/111265049-e0702280-866b-11eb-8b99-3e55b743e741.png" width="80%">

🔻 배열로 한번에 도큐먼트를 추가할 수 있다.

```shell
db.info1.insert([
    {subject: "python", level: 3},
    {subject: "java", level: 2},
    {subject: "html", level: 1},
    {subject: "python", level: 3},
    {subject: "java", level: 2},
    {subject: "html", level: 1}])
```
`max:5` 옵션 제한에 걸려 5개의 데이터가 info1에 들어간다.

<img src="https://user-images.githubusercontent.com/72931773/111265218-17decf00-866c-11eb-8ae4-0d244a30d790.png" width="80%">


🔻 컬렉션의 size를 50byte로 설정한 info2

```shell
db.info2.insert([
    {subject: "python", level: 3},
    {subject: "java", level: 2},
    {subject: "html", level: 1},
    {subject: "python", level: 3},
    {subject: "java", level: 2},
    {subject: "html", level: 1}])
```

↓ `size:50` 옵션 제한에 걸려 4개의 데이터가 info2에 입력된다.

<img src="https://user-images.githubusercontent.com/72931773/111265496-86239180-866c-11eb-88fd-8d21b8f1e5cc.png" width="80%">

### Delete Document

```shell
db.info.remove( {level:2} )
```
level2인 도큐먼트 삭제

제약조건이 걸려있는 컬렉션의 도큐먼트는 삭제가 안된다.

<img src="https://user-images.githubusercontent.com/72931773/111265567-a3f0f680-866c-11eb-9ce3-1638f6184ca9.png" width="60%">

## 4. Find

### 4.1. format

```shell
db.collection.find(query, projection)
```

- `query` : document 조회 조건을 설정. 모든 document를 조회 할때는 `({})` 를 사용
- `projection` : document를 조회할때 보여지는 필드(컬럼)를 정의


### 4.2. query

<span style="background-color: linen">**1. 인수를 주지 않으면 모든 데이터가 선택된다.**</span>


```shell
db.info.find({})
```
info 컬렉션에 있는 모든 document 조회

<img src="https://user-images.githubusercontent.com/72931773/111265859-12ce4f80-866d-11eb-9f26-14444de7795d.png" width="60%">

<br>

<span style="background-color: linen">**2. 특정 문자열을 가진 데이터 조회**</span>

```shell
db.info.find({subject: "python"})
```

<img src="https://user-images.githubusercontent.com/72931773/111265940-30031e00-866d-11eb-930c-1ed279a2b468.png" width="60%">

<span style="background-color: linen">**3. 비교 연산자**</span>

- `$lte` : 지정된 값보다 작거나 같은 값과 일치합니다.
- `$gte` : 지정된 값보다 크거나 같은 값과 일치합니다.
- `$in` : 배열에 지정된 값과 일치합니다.

<span style="background-color: lavender">**예제**</span>

🔻 level이 2 이하인 document를 조회

```shell
db.info.find({level: {$lte: 2}})
```
<img src="https://user-images.githubusercontent.com/72931773/111266010-48733880-866d-11eb-9788-2434b0d33dc3.png" width="50%">

🔻 level이 3 이상인 document를 조회

```shell
db.info.find({"level": {$gte: 3} })
```

<img src="https://user-images.githubusercontent.com/72931773/111430322-8cce0980-873d-11eb-86c4-8311e97bc94a.png" width="40%">


🔻 subject가 java와 python을 포함하는 document 조회

```shell
db.info.find({subject: {$in: ["java", "python"]}})
```
<img src="https://user-images.githubusercontent.com/72931773/111266182-81aba880-866d-11eb-92ad-45855a22d02b.png" width="50%">


<span style="background-color: linen">**4. 논리 연산자**</span>

- `$and` : 조건중 하나라도 true이면 true
- `$or` : 모든 조건이 true이면 true
- `$not` : 조건중 하나라도 false이면 true
- `$nor` : 모든 조건이 false이면 true (or와 반대 개념)
  - true true => false
  - true false => false
  - false false => true

<span style="background-color: lavender">**예제**</span>

🔻 subject가 python이고 level이 3이상인 document 조회

```shell
db.info.find( { $and: [ { subject: "python" }, { level: { $gte: 2 }}]})
```
<img src="https://user-images.githubusercontent.com/72931773/111266376-d0594280-866d-11eb-8fc9-37086910d580.png" width="60%">

🔻 subject가 python이거나 level이 2이상인 document 조회

```shell
db.info.find( { $or: [ { subject: "python" }, { level: { $gte: 2 }}]})
```

<img src="https://user-images.githubusercontent.com/72931773/111266558-0d253980-866e-11eb-8443-099941678d81.png" width="40%">

🔻 subject가 python이아니고 level이 1이하가 아닌 document 조회

<img src="https://user-images.githubusercontent.com/72931773/111431023-95730f80-873e-11eb-8dc8-258463e1dc89.png" width="40%">


🔻 level이 2보다 크지 않은 document 조회 (2 포함)

```shell
db.info.find({ "level": { $not: {$gt: 2} } })
```

<img src="https://user-images.githubusercontent.com/72931773/111431139-bb001900-873e-11eb-8d81-454893282ed8.png" width="40%">

<span style="background-color: linen">**5. $where**</span>

$where 연산자를 사용하면 자바스크립트 표현식 사용이 가능합니다.

<span style="background-color: lavender">**예제**</span>

🔻 level이 1인 document 조회

```shell
db.info.find({ $where: "this.level === 1" })
```
<img src="https://user-images.githubusercontent.com/72931773/111266751-4e1d4e00-866e-11eb-9343-9a3b84700f20.png" width="40%">

### 4.3. projection

- document를 조회할때 보여지는 필드(컬럼)를 정의합니다.
- `_id`의 default는 `true` 값이다.

<span style="background-color: lavender">**예제**</span>


🔻 subject만 출력되도록 설정

```shell
db.info.find({}, { _id: true, subject: true })
```

<img src="https://user-images.githubusercontent.com/72931773/111266903-8886eb00-866e-11eb-93eb-334ce68cca69.png" width="30%">


🔻 subject만 빼고 출력된다.

```shell
db.info.find({}, { subject: false })
```
<img src="https://user-images.githubusercontent.com/72931773/111266990-a9e7d700-866e-11eb-9bc0-058d13218c35.png" width="30%">


🔻 id는 default가 true이므로 id를 빼고 출력하려면 false를 명시해야한다.

```shell
db.info.find({}, { _id: false, subject: false })
```
<img src="https://user-images.githubusercontent.com/72931773/111267039-c1bf5b00-866e-11eb-8416-8c86bea0293d.png" width="30%">

## 5. find의 메서드

find method를 사용하면 find를 사용한 document의 결과를 가공하여 출력할수 있습니다.

### 5.1. sort

document를 정렬시켜 줍니다.

```shell
sort({key: value})
```
- `key` : 정렬할 필드명을 작성
- `value` : 오름차순은 1, 내림차순을 -1

<span style="background-color: lavender">**예제**</span>

🔻 info 컬렉션의 document를 level 오름차순으로 정렬

```shell
db.info.find().sort({ level: 1 })
```

<img src="https://user-images.githubusercontent.com/72931773/111268765-0fd55e00-8671-11eb-90bc-6573e5f59429.png" width="40%">

🔻 info 컬렉션의 document를 level 내림차순으로 정렬

```shell
db.info.find().sort({"level":-1})
```

limit
- 인수만큼 
  
```shell
db.info.find().limit(3)
```
<img src="https://user-images.githubusercontent.com/72931773/111268882-398e8500-8671-11eb-94ec-711f1a40590c.png" width="">

```shell
db.info.find().sort({ level: -1 }).limit(3)
```

<img src="https://user-images.githubusercontent.com/72931773/111268929-47dca100-8671-11eb-971b-1f187002b3c5.png" width="">


skip

```shell
db.info.find().skip(4)
```

<img src="https://user-images.githubusercontent.com/72931773/111269053-6fcc0480-8671-11eb-8321-0c45de7bb16a.png" width="">


```shell
db.info.find().skip(4).limit(2)
```

<img src="https://user-images.githubusercontent.com/72931773/111269102-7eb2b700-8671-11eb-8119-a6233b36b2c3.png" width="">


update


```shell
db.collection.update(query, update, options)
```

option

```shell
db.collection.update(
    <query>,
    <update>,
    {
      upsert: <boolean>,
      multi: <boolean>,
      writeConcern: <document>,
      collation: <document>,
      arrayFilters: [ <filterdocument1>, ... ]
    }
)
```

- `upsert` : 업데이트할 때 업데이트할 데이트가 있으면 업데이트, 없으면 insert
- `multi` : 한꺼번에 여러개의 도큐먼트를 수정

```shell
db.info.update(
    {subject: "html"},
    {subject: "sass", level: 2}
)
db.info.find()
```
<img src="https://user-images.githubusercontent.com/72931773/111270247-fb926080-8672-11eb-9c1a-25edbea21f09.png" width="">

```shell
db.info.update(
    {subject: "less"},
    {subject: "less", level: 1},
    {upsert: true}
)
```
<img src="https://user-images.githubusercontent.com/72931773/111270254-fd5c2400-8672-11eb-84da-62149e12d686.png" width="">

$set, $unset : 특정 컬럼을 지정해서 수정

```shell
db.info.update({ subject: "java" }, { $set: { level: 4 } })
```
<img src="https://user-images.githubusercontent.com/72931773/111270297-0816b900-8673-11eb-8b5c-fe7355352e07.png" width="">


```shell
db.info.update(
  { subject: "html" },
  { $set: { level: 0.5 }},
  { multi: true }
)
db.info.find({subject: "html"})
```
<img src="https://user-images.githubusercontent.com/72931773/111270510-4c09be00-8673-11eb-9ede-f360e08f1b9e.png" width="">

```shell
db.info.update(
  { subject: "html" },
  { $unset: { level: 1 }}
)
  
db.info.find({subject: "html"})
```
<img src="https://user-images.githubusercontent.com/72931773/111270674-7bb8c600-8673-11eb-87fc-7dc4dd572bb5.png" width="">



```shell
var showPage = function(page, pageBlock) {
  return db.info.find().skip((page - 1) * pageBlock).limit(pageBlock)
}

showPage(2, 4)
```
<img src="https://user-images.githubusercontent.com/72931773/111270937-d8b47c00-8673-11eb-8ed4-874696c9f601.png" width="">

결과와 일치하는지 확인
<img src="https://user-images.githubusercontent.com/72931773/111270982-ee29a600-8673-11eb-9512-5ca940ff9ef1.png" width="">








---
pip install requests geohash2 pandas pymongo
vi zigbang.

vim 수정
마지막줄 중
server = pymongo.MongoClient('mongodb://fds')


# Reference
[MongoDB 에서 admin 만들기](https://ijeee.tistory.com/12https://ijeee.tistory.com/12)