import s from "./index.module.scss";

export default function Toast({ message }) {
  return (
    <div className={s.c}>
      <div className={s.c__header}>
        <i class="bx bx-info-circle"></i> Information
      </div>
      <div className={s.c__message}>{message}</div>
      <div className={s.c__wrapper}></div>
    </div>
  );
}
