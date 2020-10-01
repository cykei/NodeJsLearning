# NodeJsLearning

## history

[01] node.js 맛보기
 - createServer() & listen()

[02] event 모듈 사용
- events 모듈 의 EventEmitter() 라는 핸들러를 사용해서 이벤트를 바인드 하고 발생시키는 예제

[03] 내장 모듈 만으로 server - client 만들어보기
- server.js / index.html / client.js
- createServer() & readFile(index.html) 로 생성후 client.js로 테스트

[04] express 모듈 사용 no action
- express 모듈 사용해서 서버 생성

[04] express & ejs engine & router => 가장 기!본!적인 서버 형태 
- npm init & ejs 모듈 설치 & 패키지 구조 수동 생성
- server.js에서 router를 이용해 각 페이지 이동 가능.
- 페이지 렌더링은 ejs 엔진으로

[04] express 모듈에 static 파일 (css) 추가
- public\css\style.css 파일을 생성 & server.js에 public\css 폴더를 등록해서 styele.css 파일을 import 하고 있는 모든 html 파일들이 해당 css 파일이 적용되게 함.
