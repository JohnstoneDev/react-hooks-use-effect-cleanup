import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clockTimer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(clockTimer);
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
