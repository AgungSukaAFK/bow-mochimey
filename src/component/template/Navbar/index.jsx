"use client";

import { useRef } from "react";
import s from "./index.module.scss";

export default function Navbar() {
  const navsRef = useRef(null);

  const hamburgerHandler = () => {
    const navStyle = navsRef.current.style;

    if (navStyle.opacity === "1") {
      navStyle.transform = "scaleY(0)";
      navStyle.opacity = "0";
    } else {
      navStyle.transform = "scaleY(1)";
      navStyle.opacity = "1";
    }
  };

  return (
    <div className={s.c}>
      <div className={s.c__w}>
        <div className={s.c__w__logo}>
          <span>Mochi</span>Mey
        </div>
        <div className={s.c__w__navs} ref={navsRef}>
          <div className={s.c__w__navs__nav}>
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className={s.c__w__navs__option}>
            <div className={s.c__w__navs__option__cart}>
              <i className="bx bx-cart"></i>
            </div>
            <div className={s.c__w__navs__option__lang}>
              <i className="bx bx-world"></i> Bahasa
            </div>
          </div>
        </div>
        <div className={s.c__w__hamburger}>
          <i className="bx bx-menu" onClick={hamburgerHandler}></i>
        </div>
      </div>
    </div>
  );
}
