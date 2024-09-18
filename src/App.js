import "./App.css";
import { useState, useEffect} from "react";




function Timer() {
  const [time, setTime] = useState(0);
  const [intervalValue, setIntervalValue] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, intervalValue);

    return () => clearInterval(interval);
  }, [intervalValue]);

  return (
    <div>
      <h2>Time: {time}</h2>
      <input className="inp_numb"
        type="number"
        value={intervalValue / 1000}
        onChange={(e) => setIntervalValue(e.target.value * 1000)}
      />
      <button className="btn_time" onClick={() => setTime(0)}>Reset Timer</button>
    </div>
  );
}


const App = () => {

const [count, setCount] = useState(0)

const handleDec = () => {
setCount(count - 1)

};


useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      setCount((prevCount) => prevCount + 1);
    } else if (event.key === "ArrowDown") {
      setCount((prevCount) => prevCount - 1);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);


const handleInc = () => {
setCount(count + 1)

};


const handleMinus2 = () => {
setCount(count - 2)

};


const handlePlus5 = () => {
setCount(count + 5)

};


const handleReset = () => {
setCount(0)

};



return (
  
  <div className='counter'>
<div className='count'>
  <div className="txt_proj"><p>Project react Counter and Timer</p></div>
  <div><button className="btn_cou">{count}</button></div>
<button className="btn_dec" onClick={handleDec}>-</button>
<button className="btn_inc" onClick={handleInc}>+</button>
<button className="btn_minus_2" onClick={handleMinus2}>2-</button>
<button className="btn_plus_5" onClick={handlePlus5}>5+</button>
<button className="btn_reset" onClick={handleReset}>reset</button>

<Timer/>



</div>

  </div>
);

};




   

export default App;
