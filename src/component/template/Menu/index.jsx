"use client";
import Image from "next/image";
import s from "./index.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import products from "@/data/product.json";
import text from "@/data/text.json";

import { useContext, useEffect, useState } from "react";
import DetailProduct from "../DetailProduct";
import { LangContext } from "@/context/LangContext";
import SectionHeader from "@/component/ui/SectionHeader";
import SectionDescription from "@/component/ui/SectionDescription";
import Toast from "@/component/ui/Toast";

export default function Menu() {
  // const [dataMochi, setDataMochi] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const { lang, cart, setCart } = useContext(LangContext);

  const [toast, setToast] = useState(null);

  const dataMochi = products[lang];
  const t = text[lang];

  useEffect(() => {
    setTimeout(() => {
      if (toast) setToast(null);
    }, 4500);
  }, [toast]);

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  function addCartHandler(item) {
    // Cek dulu apakah sudah ada di cart
    setToast(true);
    const itemInCartIndex = cart.findIndex((data) => data.id === item.id);

    if (itemInCartIndex > -1) {
      // Sudah ada, tambah qty
      const updatedCart = [...cart];
      updatedCart[itemInCartIndex].qty += 1;
      setCart(updatedCart);
    } else {
      // Tidak ada
      delete item?.deskripsi;
      item.qty = 1;
      setCart((prev) => [...prev, item]);
    }
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      {toast && <Toast message={"Menu berhasil ditambahkan!"} />}
      {selectedMenu && (
        <DetailProduct data={selectedMenu} setData={setSelectedMenu} />
      )}
      <div className={s.c} id="menu">
        <SectionHeader>{t.menuTitle}</SectionHeader>
        <SectionDescription>{t.menuDesc}</SectionDescription>
        <div className={s.c__w}>
          {dataMochi.map((mochi, index) => {
            return (
              <div
                key={index}
                className={s.c__w__card}
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
              >
                <div className={s.c__w__card__w}>
                  <Image
                    src={`/${mochi.thumbnail}`}
                    width={200}
                    height={200}
                    alt="Mochi Picture"
                    className={s.c__w__card__w__image}
                  />
                  <div className={s.c__w__card__w__before}></div>
                  <div className={s.c__w__card__w__after}></div>
                </div>
                <div className={s.c__w__card__title}>{mochi.nama}</div>
                <div className={s.c__w__card__price}>
                  Rp. {mochi.harga.toLocaleString("id-ID")}
                </div>
                <div className={s.c__w__card__buttons}>
                  <button
                    type="button"
                    className={s.c__w__card__buttons__cart}
                    onClick={() => addCartHandler(mochi)}
                  >
                    <i className="bx bx-cart-download"></i> {t.menuCart}
                  </button>
                  <button
                    className={s.c__w__card__buttons__detail}
                    onClick={() => setSelectedMenu(mochi)}
                  >
                    <i className="bx bx-search-alt"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
