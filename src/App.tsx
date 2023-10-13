import { useState, useEffect } from "react";
import Settings from "./Settings";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface props {
  handleCount: () => void;
  count: any;
  setCount: any;
  countDownDuration: any;
  setCountDownDuration: any;
}

function App() {
  const [count, setCount] = useState(false);
  const [secondsValue, setSecondsValue] = useState(0);
  const [minuteValue, setMinuteValue] = useState(0);
  const [countDownDuration, setCountDownDuration] = useState(0);

  useEffect(() => {
    let secondIntervalId: any;
    let minuteIntervalId: any;

    if (count && countDownDuration > 0) {
      const maxSeconds = countDownDuration * 60;

      secondIntervalId = setInterval(() => {
        setSecondsValue((prevSecondsValue) => {
          if (prevSecondsValue < 59) {
            return prevSecondsValue + 1;
          } else {
            return 0;
          }
        });
      }, 1000);

      minuteIntervalId = setInterval(() => {
        setMinuteValue((prevMinuteValue) => {
          if (prevMinuteValue < 59) {
            return prevMinuteValue + 1;
          } else {
            return 0;
          }
        });
      }, 60000);
      if (secondsValue + minuteValue * 60 >= maxSeconds) {
        clearInterval(secondIntervalId);
        clearInterval(minuteIntervalId);
        setCount(false);
      }
    } else {
      clearInterval(secondIntervalId);
      clearInterval(minuteIntervalId);
    }

    return () => {
      clearInterval(secondIntervalId);
      clearInterval(minuteIntervalId);
    };
  }, [count, countDownDuration, secondsValue, minuteValue]);

  function handleCount() {
    setCount((prevCount) => !prevCount);
  }

  let value = countDownDuration / 100;
  return (
    <>
      <h1 className="text-white font-semibold text-3xl absolute top-4 left-1/2 transform -translate-x-1/2">
        pomodoro
      </h1>
      <div className="text-soGray z-10 text-sm font-bold bg-con py-2 px-2 rounded-3xl flex gap-6 absolute top-20 left-1/2 transform -translate-x-1/2">
        <div className="bg-subCon text-whenSel py-3 px-8 rounded-3xl">
          pomodoro
        </div>
        <div className="py-3 px-6 rounded-3xl">short break</div>
        <div className="py-3 px-6 rounded-3xl">long break</div>
      </div>
      <div className="flex items-center justify-center shadow-shadow w-80 h-80 rounded-full absolute left-1/2 transform -translate-x-1/2 top-[28%] bg-con">
        <span className="text-7xl text-white font-bold">
          {minuteValue < 10 ? `0${minuteValue}` : minuteValue}
        </span>
        <span className="text-7xl text-white font-bold">:</span>
        <span className="text-7xl text-white font-bold">
          {secondsValue < 10 ? `0${secondsValue}` : secondsValue}
        </span>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: 275, height: 275 }}
        >
          <CircularProgressbar
            styles={buildStyles({
              pathColor: "#f87071",
              trailColor: "transparent",
            })}
            value={value}
            maxValue={1}
            strokeWidth={3}
          />
        </div>
        <div
          onClick={handleCount}
          className="cursor-pointer text-white absolute bottom-20 left-1/2 transform -translate-x-1/2 font-semibold tracking-wider"
        >
          {count ? "PAUSE" : "PROCEED"}
        </div>
      </div>
      <Settings
        handleCount={handleCount}
        setCountDownDuration={setCountDownDuration}
      />
    </>
  );
}

export default App;
