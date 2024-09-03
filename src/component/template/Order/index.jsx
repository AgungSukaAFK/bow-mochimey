"use client";
import { useContext, useEffect, useRef, useState } from "react";
import s from "./index.module.scss";
import { LangContext } from "@/context/LangContext";
import Image from "next/image";

export default function Order({ openCart, setOpenCart }) {
  const [alert, setAlert] = useState(null);

  const [nameRef, methodRef] = [useRef(null), useRef(null)];

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  }, [alert]);

  const { cart, setCart } = useContext(LangContext);
  function backHandler() {
    setOpenCart(false);
  }

  function calculateTotal(data) {
    let totalPrice = 0;
    console.log(data);
    data.forEach((item) => {
      totalPrice += item.harga * item.qty;
      console.log(item);
    });
    return totalPrice;
  }

  function checkoutHandler() {
    let [name, method] = [nameRef.current.value, methodRef.current.value];

    const totalHarga = calculateTotal(cart);
    let message = encodeURIComponent(
      `*[ORDER] Daifuku Mochi MochiMey*\n
-- Informasi Pembeli --\n
Nama: ${name}
Metode pemesanan: ${method}\n
-- Detail Pesanan --
${cart
  .map((order) => {
    return `${order.qty}x ${order.nama} @Rp. ${order.harga.toLocaleString(
      "id-ID"
    )}\n`;
  })
  .join("")}
-- Total Harga --
Rp. ${totalHarga.toLocaleString("id-ID")}`
    );

    if (!name || !method) {
      setAlert("Input data pembeli harus diisi");
    } else {
      window.open(
        `https://api.whatsapp.com/send/?phone=6281517942650&text=${message}&type=phone_number&app_absent=0`
      );
    }
  }

  function addItem(id) {
    let copyCart = [...cart];
    let itemInCartIndex = copyCart.findIndex((i) => i.id === id);

    if (itemInCartIndex > -1) {
      copyCart[itemInCartIndex].qty += 1;
    }

    setCart(copyCart);
  }

  function decreaseItem(id) {
    let copyCart = [...cart];
    let itemInCartIndex = copyCart.findIndex((i) => i.id === id);

    if (itemInCartIndex > -1) {
      if (copyCart[itemInCartIndex].qty > 1) {
        copyCart[itemInCartIndex].qty -= 1;
      }
    }

    setCart(copyCart);
  }

  function deleteItem(id) {
    let copyCart = cart.filter((i) => i.id !== id);

    setCart(copyCart);
  }

  return (
    <div className={`${s.c} ${openCart && s.active}`}>
      <div className={s.c__w}>
        {cart.length > 0 ? (
          <div className={s.c__w__orders}>
            <div className={s.c__w__orders__header}>Detail Keranjang</div>
            <div className={s.c__w__orders__information}>
              <p>
                *Untuk saat ini, pemesanan hanya mendukung COD dan pembelian
                langsung.
              </p>
            </div>
            <div className={s.c__w__orders__form}>
              <div className={s.c__w__orders__form__input}>
                <label htmlFor="nama">Nama</label>
                <input type="text" ref={nameRef} />
              </div>
              <div className={s.c__w__orders__form__input}>
                <label htmlFor="combobox">Metode pembelian</label>
                <select name="combobox" defaultValue="" ref={methodRef}>
                  <option value="" disabled hidden>
                    -- Pilih metode pembelian --
                  </option>
                  <option value="COD (Cash on Delivery)">COD</option>
                  <option value="Datang ke stand">Datang ke stand</option>
                </select>
              </div>
            </div>
            <div className={s.c__w__orders__w}>
              {cart.map((item, index) => {
                return (
                  <div key={index} className={s.c__w__orders__w__card}>
                    <div className={s.c__w__orders__w__card__left}>
                      <Image
                        src={`/${item.thumbnail}`}
                        width={100}
                        height={100}
                        alt={item.nama}
                      />
                    </div>
                    <div className={s.c__w__orders__w__card__right}>
                      <div className={s.c__w__orders__w__card__right__info}>
                        <div
                          className={
                            s.c__w__orders__w__card__right__info__title
                          }
                        >
                          {item.nama}
                        </div>
                        <div
                          className={
                            s.c__w__orders__w__card__right__info__detail
                          }
                        >
                          <div
                            className={
                              s.c__w__orders__w__card__right__info__detail__method
                            }
                          >
                            {`Harga per mochi Rp. ${item.harga.toLocaleString(
                              "id-ID"
                            )}`}
                          </div>
                          <div
                            className={
                              s.c__w__orders__w__card__right__info__detail__price
                            }
                          >
                            <span>
                              Total:{" "}
                              {(item.harga * item.qty).toLocaleString("id-ID")}
                            </span>
                            <div>
                              <button onClick={() => decreaseItem(item.id)}>
                                <i class="bx bx-minus"></i>
                              </button>
                              <div>{item.qty}</div>
                              <button onClick={() => addItem(item.id)}>
                                <i class="bx bx-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={s.c__w__orders__w__card__right__delete}
                        onClick={() => deleteItem(item.id)}
                      >
                        <i class="bx bx-trash"></i>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {alert && <div className={s.c__w__orders__alert}>{alert}</div>}
            <div className={s.c__w__orders__buttons}>
              <button onClick={backHandler}>Kembali</button>
              <button
                className={s.c__w__orders__buttons__checkout}
                onClick={checkoutHandler}
              >
                Lanjutkan Pesanan
              </button>
            </div>
          </div>
        ) : (
          <div className={s.c__w__noItem}>
            <i class="bx bx-cart"></i>
            <div>Oops... sepertinya belum ada item di keranjang</div>
            <div>
              Tambahkan pesanan dari bagian <a href="#menu">Menu</a>
            </div>
            <button onClick={backHandler}>Kembali</button>
          </div>
        )}
      </div>
    </div>
  );
}
