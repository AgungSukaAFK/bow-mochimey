import s from "./index.module.scss";

export default function SectionDescription({ children, className }) {
  return <div className={`${s.c} ${className}`}>{children}</div>;
}
