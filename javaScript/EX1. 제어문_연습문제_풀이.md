# 제어문 연습 문제 풀이

##### 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라

```javascript
var x = 15;

if (x < 20) {
  if (x > 10) {
    console.log(x);
  }
}
```

##### 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

```javascript
// Case 1
for (var i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// 0, 2, 4, 6, 8


// Case 2
for (var i = 0; i < 10; ++i) {
  console.log(i++);
}
// 0, 2, 4, 6, 8


// Case 2-홀수
for (var i = 0; i < 10; i++) {
  console.log(++i);
}
//1, 3, 5, 7, 9
=== 위와 같은 결과 출력
for (var i = 0; i < 10; ++i) {
  console.log(++i);
}
//1, 3, 5, 7, 9
```



##### 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

```javascript

```



##### 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

```javascript
for (var i = 10; i > 0; i--) {
  if (i % 2 == 1) {
    console.log(i);
  }
}
//9, 7, 5, 3, 1
```



##### 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

```javascript
var i = 0;

while (i < 10) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}
// 0, 2, 4, 6, 8
```



##### 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

```javascript
var i = 10;

while (i > 0) {
  if (i % 2 == 1) {
    console.log(i);
  }
  i--;
}
//9, 7, 5, 3, 1
```



##### 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.

```javascript
var result = 0; // 0값 할당 안하면 NaN값 출력됨
for (var i = 0; i < 10; i++) {
  result += i;
}
console.log(result);
// 45 
// -> result = 0 + 1 -> 1 + 2 -> 3 + 3 -> 6 + 4 -> ... 


//시행착오 1
var result;
for (var i = 0; i < 10; i++) {
  result = i + i;
}

console.log(result); // 18 -> 마지막 숫자인 i=9의 i+i 값!
```



##### 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

```javascript
var result = 0;

for (var i = 1; i < 20; i++) {
  result += i;
  if (i % 2 == 0) {
    result -= i;
  } else if (i % 3 == 0) {
    result -= i;
  }
}

console.log(result);
// 73
```



##### 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

```javascript
var x = 0;
var y = 0;

for (var i = 1; i < 20; i++) {
  if (i % 2 == 0) {
    x += i;
  } else if (i % 3 == 0) {
    y += i;
  }
}

console.log(x + y);
// 117

// 위의 결과를 다시 정리해서 아래 코드 도출

var result = 0;

for (var i = 1; i < 20; i++) {
  if (i % 2 == 0) {
    result += i;
  } else if (i % 3 == 0) {
    result += i;
  }
}

console.log(result);
// 117
```



##### 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

```javascript
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) {
      console.log([i, j]);
    }
  }
}
// [ 1, 5 ]
// [ 2, 4 ]
// [ 3, 3 ]
// [ 4, 2 ]
// [ 5, 1 ]

```



##### 11. 삼각형 출력하기 - pattern 1

다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

```javascript
var result = '';
for (var line = 1; line <= 5; line++) {
  result += '*';
  console.log(result);
  console.log('\n');
}

*
**
***
****
*****
  
  
// Case 2
var result = '';

for (var i = 1; i <= 5; i++) {
  for (var j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);
```



##### 12. 삼각형 출력하기 - pattern 2

다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

```javascript
var line = 6;
var result = '';

for (var i = line - 1; i > 0; i--) {
  for (var k = line - 1; k >= j; k--) {
    result += ' ';
  }
  for (var j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);

*****
 ****
  ***
   **
    *
```



##### 13. 삼각형 출력하기 - pattern 3

다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

```javascript
var line = 6;
var result = '';

for (var i = line - 1; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);

*****
****
***
**
*
```

![Untitled Diagram (1)](/Users/choijin-yeong/Downloads/Untitled Diagram (1).png)



| line | i    | i > 0 | j    | j < i | console |
| ---- | ---- | ----- | ---- | ----- | ------- |
| 6    | 5    | T     | 0    | T     | ✳︎       |
|      |      |       | 1    | T     | ✳︎✳︎      |
|      |      |       | 2    | T     | ✳︎✳︎✳︎     |
|      |      |       | 3    | T     | ✱✱✱✱✱   |
|      |      |       | 4    | T     | ✱✱✱✱✱   |
|      |      |       | 5    | F     | \n      |
|      | 4    | T     | 0    | T     | ✳︎       |
|      |      |       | ...  | ...   |         |
|      |      |       | 3    | T     | ✱✱✱✱    |
|      |      |       | 4    | F     | \n      |
|      | 3    | T     | 0    | T     | ✳︎       |
|      |      |       | 1    | T     | ✳︎✳︎      |
|      |      |       | 2    | T     | ✱✱✱     |
|      |      |       | 3    | F     | \n      |
|      | 2    | T     | 0    | T     | ✳︎       |
|      |      |       | 1    | T     | ✱✱      |
|      |      |       | 2    | F     | \n      |
|      | 1    | T     | 0    | T     | ✱       |
|      |      |       | 1    | F     | \n      |
|      | 0    | T     | 0    | F     | \n      |
|      |      |       |      |       |         |



##### 14. 삼각형 출력하기 - pattern 4

다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

```javascript
var result = '';

for (var i = 1; i <= 5; i++) {
  for (var k = 6 - i; k > 0; k--) {
    result += ' ';
  }
  for (var j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);

    *
   **
  ***
 ****
*****
```



##### 15. 정삼각형 출력하기

```javascript
var result = '';

for (var i = 1; i <= 5; i++) {
  for (var k = 6 - i; k > 0; k--) {
    result += ' ';
  }
  for (var j = 0; j < i; j++) {
    result += '*';
  }
  for (var j = 1; j < i; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);

    *
   ***
  *****
 *******
*********
```



##### 16. 역정삼각형 출력하기

```javascript
var line = 6;
var result = '';

for (var i = line - 1; i > 0; i--) {
  for (var k = line - 1; k >= j; k--) {
    result += ' ';
  }
  for (var j = 0; j < i; j++) {
    result += '*';
  }
  for (var j = 1; j < i; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);

*********
 *******
  *****
   ***
    *
```