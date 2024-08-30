import SectionHeader from "@/component/ui/SectionHeader";
import s from "./index.module.scss";
import SectionDescription from "@/component/ui/SectionDescription";

export default function Contact() {
  return (
    <div className={s.c} id="contact">
      <SectionHeader>Contact</SectionHeader>
      <SectionDescription>
        Hubungi saya melalui email dengan form dibawah, atau temui langsung di
        lokasi penjualan pada maps berikut. Jam operasional bervariasi
      </SectionDescription>
      <div>
        <div>form</div>
        <div>maps</div>
      </div>
    </div>
  );
}
