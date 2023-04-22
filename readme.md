```
JSON Web Token(JWT)은 웹 표준으로 지정된 RFC 7519에 따라 JSON 객체를 사용하여 정보를 안전하게 전달하는 방법입니다. JWT는 토큰 자체가 정보를 포함하고 있어서 별도의 저장소에 대한 의존성이 없습니다. 이러한 특징으로 인해 JWT는 인증과 정보 교환에 매우 유용합니다.

Node.js에서 JWT를 사용하여 토큰 인증을 구현하는 방법은 다음과 같습니다.

1. JWT 패키지 설치

npm을 사용하여 jwt 패키지를 설치합니다.

`npm install jsonwebtoken`

2. 토큰 생성

jsonwebtoken 패키지를 사용하여 토큰을 생성합니다. 토큰에는 사용자 ID와 같은 정보를 포함시킬 수 있습니다.

```

const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 'user123' }, 'secretKey');

```

3. 토큰 검증

jsonwebtoken 패키지를 사용하여 토큰을 검증합니다. 검증에는 토큰과 비밀 키가 필요합니다.

```

const jwt = require('jsonwebtoken');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMTIzIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
try {
const decoded = jwt.verify(token, 'secretKey');
console.log(decoded); // { userId: 'user123', iat: 1516239022 }
} catch(err) {
console.log(err);
}

```

위의 코드에서 `jwt.sign()` 함수는 토큰을 생성하고 `jwt.verify()` 함수는 토큰을 검증합니다. 이를 이용하여 Node.js에서 JWT를 사용하여 토큰 인증을 구현할 수 있습니다.
```
