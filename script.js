    
    let hour = 00;
    let minute = 00;
    let second = 00;
    let millisecond = 00;

    var interval;

    function stop(){
        
        clearInterval(interval)

    }

    function start(){

        stop()
        interval = setInterval(time, 10)
        
    }

    function reset(){

        hour = 0
        minute = 0
        second = 0
        millisecond = 0;
        
        document.getElementById("hour").innerText = "00"
        document.getElementById("minute").innerText = "00"
        document.getElementById("second").innerText = "00"
        document.getElementById("millisecond").innerText = "00"

        
        
    }

    function time(){

        if ((millisecond++) == 100) {
        millisecond = 0;
        second++;
    } else if (second == 60) {
        second = 0;
        minute++;
    } else if (minute == 60) {
        minute = 0;
        hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
}

    function returnData(input) {
    return input > 10 ? input : `0${input}`
}


