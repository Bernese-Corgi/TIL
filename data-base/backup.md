# BACKUP

## Backup의 종류

### 데이터 베이스 

**① Hot Backup**

데이터 베이스를 중지하지 않은 상태로 데이터 백업
- 백업하는 동안 서비스가 실행
- 백업하는 동안 데이터가 변경되어 완전한 백업이 안될수 있음


**② Cold Backup**

데이터 베이스를 중지한 상태로 데이터 백업
- 안정적으로 백업이 가능
- 백업하는 동안 서비스가 중단되어야 함


### 

**① Logical Backup**

SQL 문으로 백업
- 느린 속도의 백업과 복원
- 디스크 용량을 적게 사용 : 데이터 베이스가 클 때 사용한다.
- 작업시 시스템 자원을 많이 사용
- 문제 발생에 대한 파악이 쉬움
- 서버 OS 호환이 잘됨

**② Physical Backup**

파일 차체를 백업
- 빠른 속도의 백업과 복원
- 디스크 용량 많이 사용 : 데이터 베이스가 작을 때 사용
- 작업시 시스템 자원을 적게 사용
- 문제 발생에 대한 파악과 검토가 어려움
- 서버 OS 호환이 잘안될수 있음

### Hot Logical Backup 실습

SQL 파일로 백업

shell script : command들을 하나의 파일로 모아놓은 것
백업하는 shell script 생성

하루에 한번씩 backup.sh를 실행해라. (crontab으로)



---
shell script
```
$ vi backup.sh
```

```
#!/bin/bash
BD=`date +%Y%m%d_%H%M --date=today`
FILE=${BD}.sql
echo "mysqldump -u root -pfds test > $FILE"
```

년월일을..
$BD라는 변수에 문자열로? 넣어주고
실행할 명령을 문자열을 출력해준다 (echo)


backup.sh 수정
빔 : 명령모드에서 
yyp => 복사
dw => 단어 삭제
x => 한개 삭제
u => 되돌리기

```
#!/bin/bash

BD=`date +%Y%m%d_%H%M --date=today`
FILE=${BD}.sql
# echo "mysqldump -u root -pfds test > $FILE"

cd ~/backup
echo "mysqldump -u root -pfds test > $FILE"
cd ~
```

/bin/bash backup.sh를 1분에 한번씩 실행시키면, 1분에 한번씩 백업된다.


크론탭 환경에서는 mysqldump가 실행되지 않아서 에러가 뜨는 경우가 있다.

우분투가 실행되면, .bashrc 또는 .bash_profile(시작 프로그램 같은것)에서 설정해야된닫ㅇ자덕

크론탭은 .bashrc 또는 .bash_profile이 실행되기 전에 실행이 되기 때문에 이 파일들에서 설정한 것들이 잘 실행되지 않을 수 있다. (mysql처럼,, 근데 실행이 지금은 되네) (지금 되는 이유는 아마도 아마존 서버에서 설정이 되어있을 것..)

환경 변수 : 시스템에서 사용되는 변수

우분투에서도 환경변수를 사용할 수 있다.





### Cold Phygical Backup 실습

서버 1, 2가 생성 후 백업 파일(binary file)을 로컬에 저장한 후 서버2의 크론탭에 저장???

루트권한 계정으로 로그인
$ sudo su


root@ip-172-31-42-144:/home/ubuntu#

로그인 정보는 pem 파일이 가지고 있다.

mysql의 권한은 mysql이 가지고 있기 때문에 Root 권한으로 작업해야한다.

모든 파일을 복사

권한이 다르면 파일을 가져올 수 없다. 파일을 서로 주고받으려면 권한을 맞춰야한다.

모든 파일을 우분투 권한으로 바꾼다.
$ sudo chown -R ubuntu: /home/ubuntu/backup

서버 2 설치
AWS에서 인스턴스 생성

vim 명령어
/bind : bind라는 글자를 찾는다. 여기서 엔터치면 그쪽으로 커서 옮겨짐
shift+D : 현재 커서 위치부터 줄 끝까지 삭제

재시작해야 바뀐 설정이 적용된다.
sudo systemctl restart mysql

workbench 생성

서버를 중단시킨 상태에서 pc에 있던 백업 파일을 옮길 것이당.
sudo systemctl stop mysql

backup 디렉토리 삭제
rm -rf backup

사이버덕을 이용해서 백업디렉토리 옮기기
백업 SFTP 생성
서버2의 퍼블릭 ip 주소 설정
fds.pem으로 설정
/home/ubuntu/에 저장해둔 백업 파일 드래그앤드롭

/home/ubuntu 디렉토리에서만 ubuntu 권한을 이용할 수 있게 설정해놓앗따.

mkdir tmp
sudo su
cd /var/lib/mysql
cp -r * /home/ubuntu/tmp/ : 임시 디렉토리에 복사 (혹시 모를것을 대비해서)
cp -r /home/ubuntu/backup/* ./ : 현재 디렉토리에 /home/ubuntu/backup/의 모든 파일을 복사

root 권한으로 파일을 복사했기 때문에 권한을 변경해줘야 한다
sudo chown -R mysql: /var/lib/mysql
exit : 나가기

sudo systemctl start mysql
-> 하고 원


```sql
```