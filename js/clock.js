const clock = document.querySelector("#clock");
// interval : 매 번 발생해야하는 것
function getClock() {
    const date = new Date();
    // padStart() : 길이가 1인 문자가 있을경우, padding을 string의 앞부분에 쓸 수 있게 해줌.
    const hours = String(date.getHours()).padStart(2, "0");     
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;     // ``(백틱)을 사용하는 이유???
}
getClock();
setInterval(getClock, 1000);

//setInterval(sayHello, 5000)       // 2개의 인수를 받음  5000은 5초를 의미
//setTimeout(sayHello, 5000)
// 두 함수의 차이점???