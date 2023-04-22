const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// JWT 토큰 생성 함수
function generateAccessToken(username) {
  return jwt.sign({ id: username }, "secret", {
    expiresIn: "15m",
  });
}

// JWT 토큰 인증 함수
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  // JWT로부터 토큰 추출
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  // JWT 토큰 검증
  jwt.verify(token, "secret", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// 루트 경로
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 인증이 필요한 경로
app.get("/protected", authenticateToken, (req, res) => {
  res.json(req.user);
});

// 로그인 경로
app.post("/login", (req, res) => {
  // 유효한 자격 증명 확인
  const username = req.body.username;
  const password = req.body.password;

  // 데이터베이스에서 사용자 정보 검색

  // 사용자가있는 경우, JWT 생성 및 반환
  const accessToken = generateAccessToken(username);
  res.json({ accessToken: accessToken });
});

// 서버 실행
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
