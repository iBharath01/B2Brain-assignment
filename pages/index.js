import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Styles from "../Styles/index.module.css";
import Image from "next/image";
import Hero from "../assets/Hero.png";
import proofOfWork from "../assets/ProofOfWork.png";
import Testimony from "../assets/Testimony.png";
import Accounts from "../components/Accounts";
import { useState } from "react";

export default function Home() {
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);

  const handleSearchbarFocus = () => {
    setIsSearchbarOpen(true);
  }

  const clearSearchbar = () => {
    setIsSearchbarOpen(false);
  }
  



  return (
    <div className={Styles.Home}>
      <div className={Styles.Sidebar__container}>
        <Sidebar />
      </div>
      <div className={Styles.Contain__container}>
        <div>
          <Navbar isSearchbarOpen={isSearchbarOpen} clearSearchbar={clearSearchbar} handleSearchbarFocus={handleSearchbarFocus}/>
        </div>
        {
          isSearchbarOpen ?  <div>
          <Accounts />
        </div>:     <div>
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
        }
       
    
      </div>
      
    </div>
  );
}
