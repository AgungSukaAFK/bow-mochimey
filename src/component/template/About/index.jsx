"use client";
import SectionHeader from "@/component/ui/SectionHeader";
import s from "./index.module.scss";
import SectionDescription from "@/component/ui/SectionDescription";
import Image from "next/image";
import reviewsData from "@/data/reviews.json";
import textData from "@/data/text.json";
import { useContext } from "react";
import { LangContext } from "@/context/LangContext";

export default function About() {
  const { lang } = useContext(LangContext);
  const t = textData[lang];
  const reviews = reviewsData[lang];

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
      <SectionHeader>{t.aboutHeader}</SectionHeader>
      <SectionDescription className={s.c__sub}>
        {t.aboutDesc}
      </SectionDescription>
      <div className={s.c__review}>
        <div className={s.c__review__header}>
          <div className={s.c__review__header__title}>
            {t.aboutReviewHeader}
          </div>
          <div className={s.c__review__header__desc}>{t.aboutReviewDesc}</div>
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
