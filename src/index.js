function printClock() {
    var clock = document.getElementById("clock");            
    var currentDate = new Date();                                    
    var amPm = 'AM'; // 초기값 AM

    var currentHours = addZeros(currentDate.getHours(),2); 
    var currentMinute = addZeros(currentDate.getMinutes() ,2);
    var currentSeconds =  addZeros(currentDate.getSeconds(),2);

    var cache = {};
    
    if(currentHours >= 12){ // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
    	amPm = 'PM';
    	currentHours = addZeros(currentHours - 12,2);
    }

    if(currentSeconds >= 50){// 50초 이상일 때 색을 변환해 준다.
       currentSeconds = '<i style="color:#de1951;">'+currentSeconds+'</i>'
    }
    clock.innerHTML = "<span class='time'><i>" + amPm + "</i>" + currentHours + ":" + currentMinute + ":" + currentSeconds + "</span>"; //시간를 출력해 줌
    
    setTimeout("printClock()",1000);         // 1초마다 printClock() 함수 호출

}

function addZeros(num, digit) { // 자릿수 맞춰주기
	var zero = '';
	num = num.toString();

	if (num.length < digit) {
		for (i = 0; i < digit - num.length; i++) {
		  zero += '0';
		}
	}

	return zero + num;
}

var btn = document.querySelector('.btn');
var list = document.querySelector('.list');

btn.addEventListener("click", function (event) {
	var listEl = document.createElement('li');
	listEl.textContent = clock.textContent;

    list.appendChild(listEl);
});
