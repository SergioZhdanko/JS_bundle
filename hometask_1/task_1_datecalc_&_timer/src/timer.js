import { formatError } from './common.js';

		console.log("Это таймер!");
		const hoursEl = document.querySelector('#hours');
		const minutesEl = document.querySelector('#minutes');
		const secondsEl = document.querySelector('#seconds');
		const btnStart = document.querySelector('.btn-start');
		const btnPause = document.querySelector('.btn-pause');
		const btnStop = document.querySelector('.btn-stop');
		const btnReset = document.querySelector('.btn-reset');
		const cautionMessage = document.querySelector('.caution-message');
		let interval;
		let isPause = false;
		let totalTimePerSeconds = 0;
		let totalTimeBackup = 0;
        let audioSignal = new Howl({
            src: ['sound/Sound_18678.mp3']
          });
		init();

		function init() {
			btnPause.style.display = 'none';
			btnStop.style.display = 'none';
			btnReset.style.display = 'none';

			btnStart.addEventListener('click', ()=> {
			const hours = parseInt(hoursEl.value);
			const minutes = parseInt(minutesEl.value);
			const seconds = parseInt(secondsEl.value);
			cautionMessage.innerHTML = '';
			totalTimeBackup = totalTimePerSeconds = hours * 60 * 60 + minutes * 60 + seconds;
			if(totalTimePerSeconds < 0) {
				cautionMessage.innerHTML = formatError("Введенные значения времени должны быть положительными");
			} 
			startTimer();

			btnPause.style.display = 'inline-block';
			btnStop.style.display = 'inline-block';
			btnReset.style.display = 'inline-block';
			btnStart.style.display = 'none';
			});

			btnPause.addEventListener('click', () => {
				isPause = !isPause;
				if(isPause) {
					btnPause.innerText = 'Продолжить';
				} else {
					btnPause.innerText = 'Пауза';
				}
				
			});

			btnStop.addEventListener('click', () => {
				stopTimer();
				totalTimePerSeconds = totalTimeBackup;
				isPause = false;
				updateTimeFields();

				btnPause.style.display = 'none';
				btnStop.style.display = 'none';
				btnReset.style.display = 'none';
				btnStart.style.display = '';
			});

			btnReset.addEventListener('click', () => {
				totalTimePerSeconds = totalTimeBackup;
				updateTimeFields();
			});
		}
		
		function startTimer() {
			interval = setInterval(() => {
				if(isPause) return;
				totalTimePerSeconds--;
				updateTimeFields();
				if(totalTimePerSeconds <= 0) {
					stopTimer();
				}
			}, 1000)
		}

		function stopTimer() {
			interval = clearInterval(interval);
		}

		function updateTimeFields() {
			const hours = Math.floor(totalTimePerSeconds / 60 / 60);
			const minutes = Math.floor(totalTimePerSeconds / 60);
			const seconds = totalTimePerSeconds % 60;
            if(totalTimePerSeconds === 0) {
                audioSignal.play();
            }
			hoursEl.value = hours;
			minutesEl.value = minutes;
			secondsEl.value = seconds;
		}

