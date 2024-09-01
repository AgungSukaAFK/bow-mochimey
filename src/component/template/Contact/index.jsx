"use client";
import SectionHeader from "@/component/ui/SectionHeader";
import s from "./index.module.scss";
import SectionDescription from "@/component/ui/SectionDescription";
import { useContext, useEffect, useRef, useState } from "react";
import LoadingOverlay from "@/component/ui/Loading";
import { emailServices } from "@/service/email";
import { LangContext } from "@/context/LangContext";
import t from "@/data/text.json";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(null);
  const [alert, setAlert] = useState(null);
  const formRef = useRef(null);

  const { lang } = useContext(LangContext);
  const text = t[lang];

  async function formSubmitHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      if (!value) {
        setAlert("Semua field harus diisi");
        setIsLoading(false);
        return;
      } else {
        data[key] = value;
      }
    }
    const res = await emailServices.sendEmail(data);
    if (res.status === 200) {
      setAlert(res.message);
      formRef.current.reset();
    } else {
      setAlert(res.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  }, [alert]);

  return (
    <div className={s.c} id="contact">
      <LoadingOverlay isLoading={isLoading} />
      <SectionHeader>{text.contactHeader}</SectionHeader>
      <SectionDescription>{text.contactDesc}</SectionDescription>
      <div className={s.c__w}>
        <div className={s.c__w__left}>
          <form
            className={s.c__w__left__form}
            ref={formRef}
            onSubmit={formSubmitHandler}
          >
            <div className={s.c__w__left__form__title}>
              {text.contactFormHeader}
            </div>
            <div className={s.c__w__left__form__w}>
              <label htmlFor="name">{text.contactFormNama}</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder={text.placeholderNama}
              />
            </div>
            <div className={s.c__w__left__form__w}>
              <label htmlFor="nohp">{text.contactFormNohp}</label>
              <input
                type="text"
                name="nohp"
                id="nohp"
                placeholder={text.placeholderNohp}
              />
            </div>
            <div className={s.c__w__left__form__w}>
              <label htmlFor="email">{text.contactFormEmail}</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder={text.placeholderEmail}
              />
            </div>
            <div className={s.c__w__left__form__w}>
              <label htmlFor="message">{text.contactFormMessage}</label>
              <textarea name="message" id="message" rows={3}></textarea>
            </div>
            <button type="submit" className={s.c__w__left__form__button}>
              Kirim
            </button>
            {alert && <div className={s.c__w__left__form__alert}>{alert}</div>}
          </form>
        </div>
        <div className={s.c__w__right}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d545.9706747576374!2d106.17676317561715!3d-6.146270199405253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41f55cda338683%3A0x50e28761ab11677e!2sPerumahan%20Puri%20Serang%20Hijau!5e0!3m2!1sid!2sid!4v1725106884277!5m2!1sid!2sid"
            width="600"
            height="450"
            className={s.c__w__right__map}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
