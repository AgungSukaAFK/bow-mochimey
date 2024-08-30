"use client";
import SectionHeader from "@/component/ui/SectionHeader";
import s from "./index.module.scss";
import SectionDescription from "@/component/ui/SectionDescription";
import Image from "next/image";
import t from "@/data/reviews.json";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "@/context/LangContext";

export default function About() {
  const { lang } = useContext(LangContext);
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    if (!reviews) {
      setReviews(t[lang]);
    }
  }, [reviews, lang]);

  function generateStars(rating) {
    return (
      <>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <span key={index}>
              {index <= rating ? (
                <i className="bx bxs-star"></i>
              ) : (
                <i className="bx bx-star"></i>
              )}
            </span>
          );
        })}
      </>
    );
  }

  return (
    <div className={`${s.c} shapedividers_com-7443`} id="about">
      <SectionHeader>About MochiMey</SectionHeader>
      <SectionDescription className={s.c__sub}>
        Selamat datang di Mochi Mey, tempat kenikmatan bertemu kesegaran! Kami
        menyajikan daifuku yang dibuat dengan bahan segar, berisi potongan buah
        dan krim premium. Nikmati berbagai varian rasa yang kaya dan tekstur
        lembut, sempurna untuk memanjakan lidah dan membawa kebahagiaan di
        setiap momen spesial. Rasakan kelezatan alami Mochi Mey yang selalu
        menyegarkan hari Anda!
      </SectionDescription>
      <div className={s.c__review}>
        <div className={s.c__review__header}>
          <div className={s.c__review__header__title}>Our Customers Review</div>
          <div className={s.c__review__header__desc}>
            What our customers are saying
          </div>
        </div>
        <div className={s.c__review__w}>
          {reviews &&
            reviews.map((review, index) => {
              return (
                <div className={s.c__review__w__card} key={index}>
                  <Image
                    src={`/${review.thumbnail}`}
                    alt="Profile"
                    width={100}
                    height={100}
                    className={s.c__review__w__card__image}
                  />
                  <div className={s.c__review__w__card__name}>
                    {review.nama}
                  </div>
                  <div className={s.c__review__w__card__stars}>
                    {generateStars(review.rating)}
                  </div>

                  <div className={s.c__review__w__card__desc}>
                    {review.desc}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
