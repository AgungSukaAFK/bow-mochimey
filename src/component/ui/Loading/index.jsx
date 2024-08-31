"use client";
import { useEffect, useRef } from "react";
import s from "./index.module.scss";

const LoadingOverlay = ({ isLoading = false }) => {
  const loadingRef = useRef(null);
  useEffect(() => {
    if (isLoading) {
      loadingRef.current.style.display = "flex";
    } else {
      loadingRef.current.style.display = "none";
    }
  }, [isLoading]);
  return (
    <div className={s.wrapper} ref={loadingRef}>
      <svg
        className={s.container}
        x="0px"
        y="0px"
        viewBox="0 0 37 37"
        height="37"
        width="37"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          className={s.track}
          fill="none"
          strokeWidth="5"
          pathLength="100"
          d="M36.63 31.746 c0 -13.394 -7.3260000000000005 -25.16 -18.13 -31.375999999999998 C7.696 6.66 0.37 18.352 0.37 31.746 c5.328 3.108 11.544 4.8839999999999995 18.13 4.8839999999999995 S31.301999999999996 34.854 36.63 31.746z"
        ></path>
        <path
          className={s.car}
          fill="none"
          strokeWidth="5"
          pathLength="100"
          d="M36.63 31.746 c0 -13.394 -7.3260000000000005 -25.16 -18.13 -31.375999999999998 C7.696 6.66 0.37 18.352 0.37 31.746 c5.328 3.108 11.544 4.8839999999999995 18.13 4.8839999999999995 S31.301999999999996 34.854 36.63 31.746z"
        ></path>
      </svg>
    </div>
  );
};

export default LoadingOverlay;
