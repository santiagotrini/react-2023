import { useState } from 'react'
import '../App.css'

function Stopwatch() {
  const [timer, setTimer] = useState(undefined)
  const [time, setTime] = useState(0)
  const toggleTimer = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(undefined);
    } else {
      const timerId = setInterval(() => setTime(t => t + 1), 10);
      setTimer(timerId);
    }
  };
  const cs = time % 100;
  const s = Math.floor(time / 100) % 60;
  const m = Math.floor(time / 6000) % 60;
  return (
    <>
      <h1>Cronómetro</h1>
      <button onClick={toggleTimer}>
        {timer ? 'Stop' : 'Start'}
      </button>
      <button onClick={() => setTime(0)}>Reset</button>
      <h1>
        {m.toString().padStart(2,0)}:
        {s.toString().padStart(2,0)}:
        {cs.toString().padStart(2,0)}
      </h1>
    </>
  )
}

export default Stopwatch;