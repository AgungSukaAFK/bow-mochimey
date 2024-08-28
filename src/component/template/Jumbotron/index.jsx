import Image from "next/image";
import s from "./index.module.scss";

export default function Jumbotron() {
  return (
    <div className={s.c}>
      <div className={s.c__h}>DAIFUKU MOCHI LEMBUT, MANIS DAN LEZAT!</div>
      <div className={s.c__main}>
        <Image
          src={"/Mochimey-transparent.png"}
          width={1000}
          height={800}
          alt="Mochimey"
          className={s.c__main__image}
        />
        <div className={s.c__main__divider}></div>
        <div className={s.c__main__mochi}>
          {/* Gambar, text, button */}
          <Image
            src={"/Cute Mochi.png"}
            width={400}
            height={400}
            alt="Mochi Cute"
            className={s.c__main__mochi__image}
          />
          <div className={s.c__main__mochi__text}>
            <div>
              <span>Mochi</span>Mey
            </div>
            <div className={s.c__main__mochi__text__desc}>by Devita</div>
          </div>
          <a href="#" className={s.c__main__mochi__button}>
            Lihat Menu Kami
          </a>
        </div>
      </div>
    </div>
  );
}
