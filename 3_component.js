
const convertSecondToTime = (seconds) => {
    let s = seconds % 60;
    let m = Math.floor(seconds / 60);
    if(s<10){
        s = '0'+ s;
    }
    if(m<10){
        m = '0' + m;
    }
    return m + ":" + s;
}

const stopWatchApp = document.getElementById('myStopWatch');

const btnAddMore = document.getElementById('btnAddMore')
btnAddMore.addEventListener('click',() =>{
    const newStopWatchApp = new StopWatch();
    stopWatchApp.appendChild(newStopWatchApp.$container);
})
class StopWatch {
    count = 0;
    interval;
    $container;
    $txtTime;
    $btnStart;
    $btnPause;
    $btnStop;
    constructor() {
        this.$container = document.createElement('div');

        this.$txtTime = document.createElement('span');
        this.$txtTime.innerHTML = '00:00';

        this.$btnStart = document.createElement('button');
        this.$btnStart.innerHTML = 'Start';
        this.$btnStart.addEventListener('click', this.handleStart);

        this.$btnPause = document.createElement('button');
        this.$btnPause.innerHTML = 'Pause';
        this.$btnPause.addEventListener('click', this.handlePause);

        this.$btnStop = document.createElement('button');
        this.$btnStop.innerHTML = 'Stop';
        this.$btnStop.addEventListener('click', this.handleStop) 

        this.$container.appendChild(this.$txtTime);
        this.$container.appendChild(this.$btnStart);
        this.$container.appendChild(this.$btnPause);
        this.$container.appendChild(this.$btnStop);
    }
    handleStart = () => {
          if(!this.interval){
            this.interval = setInterval(() =>{
                this.count++;
                this.$txtTime.innerHTML = convertSecondToTime(this.count);
            },1000)         
          }
}
    handlePause= () => {
        clearInterval(this.interval)
    }
    handleStop = () => {
        clearInterval(this.interval)
        this.$txtTime.innerHTML = '00:00';
        this.interval = undefined;
        this.count = 0;
    }
}