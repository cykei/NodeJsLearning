// 이벤트 옵저버
var events = require('events'); // node.js 내장 모듈

// 이벤트 핸들러
var eventEmitter = new events.EventEmitter();

// 1. 함수를 변수에 담아서 .on('이벤트이름', 함수) 로 바인딩한후 emit()으로 이벤트 실행
var connectHandler = function connected() {
    console.log("Connection Successful");
    
    // 이벤트 발생
    eventEmitter.emit("data_recevied");
}

eventEmitter.on('connection', connectHandler);

// 2. 함수를 콜백형태로 on()에 바로 전달
eventEmitter.on('data_recevied', function(){
    console.log("Data Received")
})

// 이벤트 발생
eventEmitter.emit('connection');

console.log("Program has ended")