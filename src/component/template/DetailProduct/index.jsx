"use client";
import Image from "next/image";
import s from "./index.module.scss";
import { useState } from "react";

export default function DetailProduct({ data, setData }) {
  const [message, setMessage] = useState(null);

  console.log(data);
  const closeHandler = () => {
    setData(null);
    document.body.style.overflow = "auto";
  };

  if (data) {
    document.body.style.overflow = "hidden";
  }
  return (
    <div className={s.c} onClick={closeHandler}>
      <div onClick={(e) => e.stopPropagation()} className={s.c__w}>
        <div className={s.c__w__left}>
          <Image
            src={`/${data.thumbnail}`}
            alt={data.nama}
            width={400}
            height={400}
            className={s.c__w__left__image}
          />
        </div>
        <div className={s.c__w__right}>
          <div className={s.c__w__right__name}>
            {data.nama}
            <button
              className={s.c__w__right__name__close}
              onClick={closeHandler}
            >
              Kembali
            </button>
          </div>
          <div className={s.c__w__right__desc}>{data.deskripsi}</div>
          <div className={s.c__w__right__price}>
            Rp. {data.harga.toLocaleString("id-ID")}
          </div>
          <div className={s.c__w__right__add}>
            <button
              onClick={() =>
                setMessage("Produk berhasil ditambahkan ke keranjang")
              }
            >
              Tambahkan ke keranjang
            </button>
          </div>
          {message && <div className={s.c__w__right__message}>{message}</div>}
        </div>
      </div>
    </div>
  );
}
