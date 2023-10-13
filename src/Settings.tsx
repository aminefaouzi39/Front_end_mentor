import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { BiSolidChevronUp, BiSolidChevronDown } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import Font from "./Font";
import Color from "./Color";

interface SettingsProps {
  handleCount: () => void;
  setCountDownDuration: (duration: number) => void;
}

const Settings = ({ handleCount, setCountDownDuration }: SettingsProps) => {
  const [show, setShow] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [shortBreak, setShortBreak] = useState(0);
  const [longBreak, setLongBreak] = useState(0);

  const showSettings = () => {
    setShow((prevShow) => !prevShow);
  };

  let updateSetting = (setting: string, action: string) => {
    if (action === "increase") {
      switch (setting) {
        case "pomodoro":
          setPomodoroCount((prevPomodoroCount) => prevPomodoroCount + 1);
          break;
        case "shortBreak":
          setShortBreak((prevShortBreak) => prevShortBreak + 1);
          break;
        case "longBreak":
          setLongBreak((prevLongBreak) => prevLongBreak + 1);
          break;
        default:
          break;
      }
    } else if (action === "decrease") {
      switch (setting) {
        case "pomodoro":
          setPomodoroCount((prevPomodoroCount) => prevPomodoroCount - 1);
          break;
        case "shortBreak":
          setShortBreak((prevShortBreak) => prevShortBreak - 1);
          break;
        case "longBreak":
          setLongBreak((prevLongBreak) => prevLongBreak - 1);
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <IoMdSettings
        onClick={showSettings}
        className="absolute cursor-pointer bottom-6 text-slate-600 left-1/2 -translate-x-1/2 text-3xl"
      />
      <div
        style={{ display: show ? "block" : "none" }}
        className="w-[40%] h-2/3 rounded-2xl p-8 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">Settings</h1>
          <AiFillCloseCircle
            onClick={showSettings}
            className="text-2xl cursor-pointer"
          />
        </div>
        <h1 className="uppercase mt-6 mb-5 font-medium tracking-wider">
          Time (Minutes)
        </h1>
        <div className="flex text-slate-500 text-sm">
          <div>
            <label className="ml-6" htmlFor="pomodoro">
              pomodoro
            </label>
            <input
              id="pomodoro"
              className="w-3/4 h-4/6 mt-3 bg-slate-200 rounded-xl px-4 outline-none font-bold text-black"
              type="number"
              value={pomodoroCount}
              disabled
            />
            <div className="absolute top-[43%] left-1/4">
              <BiSolidChevronUp
                onClick={() => updateSetting("pomodoro", "increase")}
                className="cursor-pointer"
              />
              <BiSolidChevronDown
                onClick={() => updateSetting("pomodoro", "decrease")}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div>
            <label className="ml-4" htmlFor="short-break">
              short break
            </label>
            <input
              id="short-break"
              className="w-3/4 h-4/6 mt-3 bg-slate-200 rounded-xl px-4 outline-none font-bold text-black"
              type="number"
              value={shortBreak}
              disabled
            />
            <div className="absolute top-[43%] left-[54%]">
              <BiSolidChevronUp
                onClick={() => updateSetting("shortBreak", "increase")}
                className="cursor-pointer"
              />
              <BiSolidChevronDown
                onClick={() => updateSetting("shortBreak", "decrease")}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div>
            <label className="ml-4" htmlFor="long-break">
              long break
            </label>
            <input
              id="long-break"
              className="w-3/4 h-4/6 mt-3 bg-slate-200 rounded-xl px-4 outline-none font-bold text-black"
              type="number"
              value={longBreak}
              disabled
            />
            <div className="absolute top-[43%] left-[83%]">
              <BiSolidChevronUp
                onClick={() => updateSetting("longBreak", "increase")}
                className="cursor-pointer"
              />
              <BiSolidChevronDown
                onClick={() => updateSetting("longBreak", "decrease")}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <Font />
        <Color />
        <button
          onClick={() => {
            handleCount(); 
            setCountDownDuration(pomodoroCount * 60); 
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-44 w-32 h-12 bg-subCon rounded-2xl text-white font-semibold px-3 py-1 flex items-center justify-center"
        >
          Apply
        </button>
      </div>
    </>
  );
};

export default Settings;
