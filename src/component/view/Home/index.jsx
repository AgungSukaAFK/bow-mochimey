import Navbar from "@/component/template/Navbar";
import s from "./";
import Jumbotron from "@/component/template/Jumbotron";
import Menu from "@/component/template/Menu";
import About from "@/component/template/About";
import Divider from "@/component/ui/Divider";
import Contact from "@/component/template/Contact";

export default function HomeView() {
  return (
    <div className={s.container}>
      <Navbar />
      <Jumbotron />
      <Menu />
      <About />
      <Divider />
      <Contact />
    </div>
  );
}
