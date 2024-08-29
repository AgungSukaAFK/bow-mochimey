import s from "./index.module.scss";

export default function SectionHeader({ children }) {
  return <div className={s.c}>{children}</div>;
}
