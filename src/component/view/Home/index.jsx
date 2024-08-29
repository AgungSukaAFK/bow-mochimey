import Navbar from "@/component/template/Navbar";
import s from "./";
import Jumbotron from "@/component/template/Jumbotron";
import Menu from "@/component/template/Menu";
import About from "@/component/template/About";

export default function HomeView() {
  return (
    <div className={s.container}>
      <Navbar />
      <Jumbotron />
      <Menu />
      <About />
    </div>
  );
}
