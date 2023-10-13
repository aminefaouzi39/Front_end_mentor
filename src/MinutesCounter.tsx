import React, { useEffect } from "react";

function MinutesCounter({ remainingMinutes, setRemainingMinutes }) {
  useEffect(() => {
    const countdownInterval = setTimeout(() => {
      if (remainingMinutes < 59) {
        setRemainingMinutes(remainingMinutes + 1);
      } else {
        setRemainingMinutes(0);
      }
    }, 60000);

    return () => clearTimeout(countdownInterval);
  }, [remainingMinutes, setRemainingMinutes]);

  return null;
}

export default MinutesCounter;