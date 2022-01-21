# Crontab

유닉스 OS 계열에서 특정 시간에 특정 작업을 해야하는 경우 사용하는 스케쥴러.


1. 서버에 접속

2. datas폴더에 employees.sql 옮기기
```
$ mkdir datas
$ mv employees.sql datas
```

## time zone 변경

**① 현재 사용 시간 확인**
```
$ timedatectl
```
![image](https://user-images.githubusercontent.com/72931773/111249529-3387ac80-864f-11eb-89d6-5f4b7163bbd6.png)

**② 사용할 수 있는 타임존 확인**

```
$ timedatectl list-timezones | grep Asia
```

![image](https://user-images.githubusercontent.com/72931773/111249625-56b25c00-864f-11eb-8bc6-4dc064763ad7.png)

`grep Asia` : Asia라는 문자가 들어간 데이터만 보겠다.

`grep Asia/s` : Asia 중 S로 시작하는 데이터

![image](https://user-images.githubusercontent.com/72931773/111249759-8e210880-864f-11eb-8b95-acf947aff8c0.png)


`cat` : 전체 데이터 확인

`head -n 10` : 상위 10줄 확인

`tail -n 5` : 아래부터 5줄 확인

`head -n 10 | tail -n 5` : 상위 10줄의 아래 5줄 확인, 즉 6~10번째 줄 확인

③ 서울로 타임존 변경

```
$ sudo timedatectl set-timezone Asia/Seoul
```

④ 
```
$ date >> time.txt
$ cat time.txt
```
```
$ date > time.txt
$ cat time.txt
```

`>>` : 기존의 데이터를 덮어쓰지 않고 새로 추가한다.

`>` : 기존의 데이터 덮어씀


## 주기 설정
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d652b67a-dfee-4bab-a804-0ae56ddd113b/KakaoTalk_Photo_2021-03-16-11-48-31.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210316T024858Z&X-Amz-Expires=86400&X-Amz-Signature=94ca553b99e0eeb48fcd1ed161e64f05ba64bd7df3f0a620783c83f2b020be2c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22KakaoTalk_Photo_2021-03-16-11-48-31.jpeg%22)

## crontab basic

1. 스케줄 설정

① 스케줄을 설정할 수 있는 vi 에디터 페이지 생성
```
$ crontab -e
```
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5d987d9c-002b-4d93-8c07-7c24c5212bba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210316T025508Z&X-Amz-Expires=86400&X-Amz-Signature=b4b4e3e9bb3b68e08b308d1d54a9ab91ab6164ae04497364d990fcbe731de099&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

② `Choose 1-4 [1] :` 에서 2를 누르면 에디터 창이 뜬다.

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/577a6dbc-1a2e-4000-94d8-ba09dd134f5b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210316T025604Z&X-Amz-Expires=86400&X-Amz-Signature=985c0184a13893ac16e77842b70276cdfdaf705d006eb2398b58e5cc4d4e2dc8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

```
$ grep CRON /var/log/syslog
```
![image](https://user-images.githubusercontent.com/72931773/111250223-5070af80-8650-11eb-9c15-84b3defd1d6a.png)


에러메시지가 있는 잘못된 파일을 실행시켜봄
```
$ date
```
![image](https://user-images.githubusercontent.com/72931773/111250378-9168c400-8650-11eb-8478-07f97e656567.png)

```
$ grep CRON /var/log/syslog
```

```
$ sudo apt-get install postfix
```
Y/N 나오면 y 누르기

![image](https://user-images.githubusercontent.com/72931773/111250561-e4427b80-8650-11eb-8770-cc58f6b0fab2.png)
Internet 에 빨갛게 되면 엔터


![image](https://user-images.githubusercontent.com/72931773/111250588-f15f6a80-8650-11eb-91ff-118507c271d4.png)
OK

$ crontab -e
* * * * * dat >> time.txt
![image](https://user-images.githubusercontent.com/72931773/111250756-35eb0600-8651-11eb-941b-b6efbdd1ccb3.png)


에러메시지 확인
![image](https://user-images.githubusercontent.com/72931773/111250830-5915b580-8651-11eb-8aa7-062f5c02a1a8.png)


뭔갈 설치....
$ sudo apt install mailutils
Y/N 나오면 y 누르기


$ mail

![image](https://user-images.githubusercontent.com/72931773/111250948-a42fc880-8651-11eb-8e6f-4239de7b3d02.png)

? 뒤에 숫자를 입력하면 메일 확인
? delete *
? q 입력하면 나가기
![image](https://user-images.githubusercontent.com/72931773/111251013-c295c400-8651-11eb-8219-868bcaed308b.png)





어따 넣어야됨ㅋㅋ

![image](https://user-images.githubusercontent.com/72931773/111250830-5915b580-8651-11eb-8aa7-062f5c02a1a8.png)