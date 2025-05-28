"use client";

import React, { useState, useEffect, useRef } from "react";

export default function CountdownTimer() {
  const [count, setCount] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && count > 0) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }

    // Cleanup interval on count change or when stopped
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, count]);

  // Stop running at 0
  useEffect(() => {
    if (count === 0) {
      setIsRunning(false);
    }
  }, [count]);

  const handleStart = () => {
    if (count === 0) {
      setCount(10);
    }
    setIsRunning(true);
  };

  // Stop running and set the count back to 10 when reset
  const handleReset = () => {
    setIsRunning(false);
    setCount(10);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Timer</h2>
      <p className="text-7xl font-bold mb-4">{count === 0 ? "Done!" : count}</p>

      <div className="space-x-4">
        <button
          onClick={handleStart}
          disabled={isRunning} // Prevent button from being clicked while running
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Start
        </button>

        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-600 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
