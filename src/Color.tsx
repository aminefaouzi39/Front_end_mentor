import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

function Color() {
  const [isSelectedBeige, setIsSelectedBeige] = useState(false);
  const [isSelectedPurple, setIsSelectedPurple] = useState(false);
  const [isSelectedPinky, setIsSelectedPinky] = useState(false);

  function toggleSelectedColor(type: string) {
    switch (type) {
      case "Beige":
        setIsSelectedBeige((prevSelected) => !prevSelected);
        break;
      case "Purple":
        setIsSelectedPurple((prevSelected) => !prevSelected);
        break;
      case "Pinky":
        setIsSelectedPinky((prevSelected) => !prevSelected);
      default:
        break;
    }
  }

  return (
    <div className="mt-10 flex items-center justify-between">
      <h1 className="text-sm uppercase tracking-wider font-medium">Color</h1>
      <div className="flex items-center justify-center gap-5">
        <div
          onClick={() => toggleSelectedColor("Beige")}
          className={`flex items-center justify-center rounded-full cursor-pointer bg-subCon border-2 w-10 h-10 ${
            isSelectedBeige ? "border-2" : ""
          }`}
        >
          {isSelectedBeige && <AiOutlineCheck />}
        </div>
        <div
          onClick={() => toggleSelectedColor("Purple")}
          className={`flex items-center justify-center rounded-full cursor-pointer bg-subCon2 border-2 w-10 h-10 ${
            isSelectedPurple ? "border-2" : ""
          }`}
        >
          {isSelectedPurple && <AiOutlineCheck />}
        </div>
        <div
          onClick={() => toggleSelectedColor("Pinky")}
          className={`flex items-center justify-center rounded-full cursor-pointer bg-subCon3 border-2 w-10 h-10 ${
            isSelectedPinky ? "border-2" : ""
          }`}
        >
          {isSelectedPinky && <AiOutlineCheck />}
        </div>
      </div>
    </div>
  );
}

export default Color;
