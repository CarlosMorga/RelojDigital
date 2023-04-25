let hr = min = sec = milsec, startTime;

const starBtn= document.getElementById('star_btn')
const stopBtn= document.getElementById('stop_btn')
const resetBtn= document.getElementById('reset_btn')

starBtn.addEventListener("click", star)
stopBtn.addEventListener("click", stop)
resetBtn.addEventListener("click", reset)

function star(){
    starBtn.classList.add('active')
    stopBtn.classList.remove("stop_active")

    startTime.setInterval(() => {
        milsec++;
        milsec = milsec < 10 ? "0" + milsec : milsec
        if (ms ==100) {
            sec ++;
            sec = sec < 10 ? "0" + sec : sec
            milsec= "0" + 0
        }
        if (sec ==60) {
            min ++;
            min = min < 10 ? "0" + min : min
            sec= "0" + 0
        }
        if (min ==60) {
            hr ++;
            hr = hr < 10 ? "0" + hr : hr
            min= "0" + 0
        }
    }, 10);
}