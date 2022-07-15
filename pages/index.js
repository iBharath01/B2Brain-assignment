import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Styles from "../Styles/index.module.css";
import Image from "next/image";
import Hero from "../assets/Hero.png";
import proofOfWork from "../assets/ProofOfWork.png";
import Testimony from "../assets/Testimony.png";

export default function Home() {
  return (
    <div className={Styles.Home}>
      <div className={Styles.Sidebar__container}>
        <Sidebar />
      </div>
      <div className={Styles.Contain__container}>
        <div>
          <Navbar />
        </div>
        <div className={Styles.Home}>
          <div className={Styles.image_hero}>
            <Image src={Hero} alt="hero" layout="fill" />
          </div>
          <div className={Styles.image_proofOfWork}>
            <Image src={proofOfWork} alt="proofOfWork" layout="fill" />
          </div>
          <div className={Styles.image_Testimony}>
            <Image src={Testimony} alt="Testimony" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}
