"use client";

import { useContext, useEffect, useRef, useState } from "react";
import s from "./index.module.scss";
import text from "@/data/text.json";
import { LangContext } from "@/context/LangContext";
import Order from "../Order";

export default function Navbar() {
  const navsRef = useRef(null);
  const { lang, setLang, cart } = useContext(LangContext);
  const t = text[lang];
  const [openCart, setOpenCart] = useState(false);

  const [count, setCount] = useState(0);

  useEffect(() => {
    let totalQty = 0;
    cart.forEach((item) => {
      totalQty += item.qty;
    });
    setCount(totalQty);
  }, [cart]);

  const hamburgerHandler = () => {
    setOpenCart(false);
    const navStyle = navsRef.current.style;

    if (navStyle.opacity === "1") {
      navStyle.transform = "scaleY(0)";
      navStyle.opacity = "0";
    } else {
      navStyle.transform = "scaleY(1)";
      navStyle.opacity = "1";
    }
  };

  const toggleLang = () => {
    if (lang === "bahasa") {
      setLang("english");
    } else {
      setLang("bahasa");
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
            <a href="#home">{t.home}</a>
            <a href="#menu">{t.menu}</a>
            <a href="#about">{t.about}</a>
            <a href="#contact">{t.contact}</a>
          </div>
          <div className={s.c__w__navs__option}>
            <div
              className={s.c__w__navs__option__cart}
              onClick={() => setOpenCart((prev) => !prev)}
            >
              <i className="bx bx-cart"></i>
              {count > 0 && (
                <div className={s.c__w__navs__option__cart__count}>
                  {count > 9 ? "9+" : count}
                </div>
              )}
            </div>
            <div className={s.c__w__navs__option__lang} onClick={toggleLang}>
              <i className="bx bx-world"></i> {t.language}
            </div>
          </div>
        </div>
        <div className={s.c__w__hamburger}>
          <i className="bx bx-menu" onClick={hamburgerHandler}></i>
        </div>
      </div>
      <Order openCart={openCart} setOpenCart={setOpenCart} />
    </div>
  );
}
