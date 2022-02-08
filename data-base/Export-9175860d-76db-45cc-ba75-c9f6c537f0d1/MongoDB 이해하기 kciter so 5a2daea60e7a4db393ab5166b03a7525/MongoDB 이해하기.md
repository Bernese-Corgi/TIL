# MongoDB 이해하기

![Untitled](MongoDB%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20kciter%20so%205a2daea60e7a4db393ab5166b03a7525/Untitled.png)

# NoSQL이란?

## RDBMS vs NoSQL

---

# 그래서 MongoDB가 뭔데?

- MongoDB는 앞서 설명한 것 처럼 NoSQL 데이터베이스
- 데이터는 Document 기반으로 구성

## Document

- MongoDB는 Document 기반 데이터베이스
- Database > Collection > Document > Field 계층으로 이루어져 있다.
  ![Untitled](MongoDB%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20kciter%20so%205a2daea60e7a4db393ab5166b03a7525/Untitled%201.png)
- Document 기반 데이터베이스은 RDBMS와 다르게 자유로이 데이터 구조를 잡을 수 있다
- MongoDB는 BSON으로 데이터가 쌓이기 때문에 Array 데이터나 Nested한 데이터를 쉽게 넣을 수 있다.

### ObjectId

- ObjectId는 클라이언트에서 생성한다
- ObjectId는 세 영역으로 나눠져있다.
  - 첫 4 byte는 UNIX Timestamp 정보
  - 다음 5 byte는 랜덤한 값 : 3 byte와 2 byte로 나뉜다
    - 첫 3 byte는 클라이언트의 머신별로 고유한 키(mac 주소나 ip 주소)를 이용하여 랜덤 값을 만들어 사용한다.
    - 다음 2 byte는 process id를 이용한다.
  - 마지막 2 byte는 Auto Increment되는 값으로 구성된다.

### MongoDB 데이터 조작

- MongoDB와 같은 NoSQL은 이름처럼 SQL을 사용하지 않고 별도로 제공하는 API를 통해 데이터를 건들 수 있다.
- MongoDB의 경우 자바스크립트 엔진 SpiderMonkey를 사용하여 API를 제공한다.

## BASE

- BASE는 ACID와 대립되는 개념

### ACID?

- 마치 MongoDB는 전혀 ACID하지 않다는 식으로 글을 썼지만 사실 MongoDB는 트랜젝션을 제공한다.

---

# MongoDB는 분산 시스템이 핵심이다

## CAP 이론

- 어떤 분산 시스템이더라도 Consistency (일관성), Availability (가용성), Partition tolerance (분할 내성)를 모두 만족할 수 없다는 이론이다.

![Untitled](MongoDB%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20kciter%20so%205a2daea60e7a4db393ab5166b03a7525/Untitled%202.png)

### Consistency

- 모든 노드가 같은 시간에 같은 데이터를 볼 수 있다는 의미를 지닌다.
- 데이터가 업데이트된 후 다른 노드에 동기화되어 모든 사용자가 최신 데이터를 본다면 일관성이 있는 시스템이다.
  이를 위해선 동기화가 되는 동안 유저는 대기해야한다.

### Availability

- 모든 요청에 성공 혹은 실패 결과를 반환 할 수 있다는 의미를 지닌다.
- 하나의 노드가 망가져도 다른 노드를 통해 데이터를 제공할 수 있다면 가용성이 있는 시스템
- 만약 다시 노드가 살아났을 때 다른 노드와 데이터가 다르다면 일관성이 떨어지는 시스템이다.

### Partition tolerance

- 통신에 실패해도 시스템이 계속 동작해야한다는 의미를 지닌다.
- 노드가 망가진 것이 아닌 노드를 연결시켜주는 네트워크가 고장나는 경우
- 둘 사이 통신이 망가져서 동기화가 불가능해진다면 일관성이 떨어진다.
- 만약 통신이 복구되고 동기화되는 것을 기다린다면 가용성이 떨어진다. 결국 둘 다 만족할 수 없다.

### CAP 이론의 한계

## PACELC 이론

- 기본적으로 네트워크 파티션 상황은 반드시 발생한다 가정하고 그에 따른 선택을 정리한 이론이 PACELC 이론이다.

### MongoDB Replica Set

- MongoDB는 클러스터를 구성하기 위한 가장 간단한 방법으로 Replica Set을 이용할 수 있다.

**P-S-S**

**P-S-A**

---

# MongoDB 패턴

## Model Tree Structure

### Parent References

### Child References

### Array of Ancestors

### Materialized Paths

### Nested Sets

## Model Relationships

- MongoDB도 RDBMS와 마찬가지로 1:1, 1:N, N:M 구조를 구성할 수 있다
- 참조는 Foreign Key처럼 키를 이용하여 참조하는 것이고 포함은 Document에 Object로 데이터를 포함하는 것을 의미한다.

### 1:1

- 가급적 Sub Document로 Embed하는 것이 좋다.
- 만약 Document의 크기가 너무 크다면 어쩔 수 없이 분리한다.

### 1:N

- Link를 선택했을 때 자주 쓰이는 데이터가 있다면 후술할 Extended Reference 패턴이나 Subset 패턴을 이용한다.
- 1이 N을 참조하는 방식

  ```json
  // 1이 N을 참조하는 방식
  // Movie Collection
  {
    title: 'Star Wars',
    reviews: [1, 2, 3]
  }

  // Review Collection
  [
    {
      _id: 1,
      comment: 'Good'
    },
    {
      _id: 2,
      comment: 'Good'
    },
    {
      _id: 3,
      comment: 'Good'
    }
  ]
  ```

- N이 1을 참조하는 방식

  ```json
  // N이 1을 참조하는 방식
  // Movie Collection
  {
    title: 'Star Wars',
  }

  // Review Collection
  [
    {
      _id: 1,
      title: 'Star wars',
      comment: 'Good'
    },
    {
      _id: 2,
      title: 'Star wars',
      comment: 'Good'
    },
    {
      _id: 3,
      title: 'Star wars',
      comment: 'Good'
    }
  ]
  ```

### N:M

- Attribute 패턴은 동일한 필드를 묶어서 인덱싱 수를 줄이는 패턴이다.

## Modeling Pattern

- 최대한 여러 Collection을 참조하는 것을 방지하고 데이터를 단순화하기 위해 모델링 패턴을 이용할 수 있다.

### Attribute

- MongoDB에서 N:M은 1:N에서 1이 N을 참조하는 방식으로 서로 참조하면 구성된다.
- 단순히 하나의 필드에 묶어서 관리하는 것을 의미한다.

### Extended Reference

- Extended Reference 패턴은 서로 관계가 있는 Document에서 자주 사용되는 데이터를 저장해두는 패턴이다.
- 필요한 데이터를 연관된 Collection에서 일부분 Document에 저장하는 것을 의미한다

### Subset

- Subset 패턴은 관계가 있는 Document 사이에 자주 사용되는 데이터를 부분적으로 Embed하는 패턴이다.
- 만약 데이터 수정이 발생한다면 양쪽을 모두 수정해야한다.

### Computed

- Computed 패턴은 미리 통계 수치를 데이터 삽입할 때 계산하는 패턴이다.
- 집계 합수는 데이터가 많을 수록 성능이 느리기 때문에 조금 오차가 발생해도 괜찮다면 Computed 패턴을 쓰는 것이 좋다.

### Bucket

- Bucket 패턴은 하나의 필드를 기준으로 Document를 묶는 패턴이다.
- 실시간으로 데이터가 들어오는 시계열 데이터에 적합하다.

### Schema Versioning

- Schema Versioning 패턴은 Document에 버전 정보를 기록하는 패턴이다.
- 서비스를 운영하다보면 스키마가 변경될 가능성이 높다. 이 때 Schema Versioning 패턴을 사용하면 기존 데이터를 급하게 마이그레이션하지 않아도 괜찮다.

---

# 마치며

- 내 개인적인 생각으론 MongoDB를 비롯한 NoSQL은 최대한 단순하게 사용하는 것이 옳은 방향이라고 생각한다.
- NoSQL은 최대한 단순하면서 많은 데이터, RDBMS는 복잡하면서 무결성이 중요한 데이터에 적합하다고 생각한다.
- 데이터를 단순화하는 것도 쉬운 일은 아니기 때문에 만약 당신이 MongoDB를 사용할 계획이 있다면 꼭 위 모델링 패턴을 참고하여 데이터 구조를 잡는 것을 추천한다.

# Reference

https://kciter.so/posts/about-mongodb
