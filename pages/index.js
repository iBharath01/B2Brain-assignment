import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Styles from "../Styles/index.module.css";
import Image from "next/image";
import Hero from "../assets/Hero.png";
import proofOfWork from "../assets/ProofOfWork.png";
import Testimony from "../assets/Testimony.png";
import Accounts from "../components/Accounts";
import { useState, useEffect } from "react";

export default function Home() {
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      fetch(
        "https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=test"
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    }, 2000);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [search]);

  const handleSearchbarFocus = () => {
    setIsSearchbarOpen(true);
  };

  const clearSearchbar = () => {
    setIsSearchbarOpen(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={Styles.Home}>
      <div className={Styles.Sidebar__container}>
        <Sidebar />
      </div>
      <div className={Styles.Contain__container}>
        <div>
          <Navbar
            isSearchbarOpen={isSearchbarOpen}
            clearSearchbar={clearSearchbar}
            handleSearchbarFocus={handleSearchbarFocus}
            search={search}
            handleSearch={handleSearch}
          />
        </div>
        {isSearchbarOpen ? (
          <div>
            <Accounts
              logo={
                "https://www.looper.com/img/gallery/20-epic-movies-like-avatar-you-need-to-watch-next/intro-1645555067.webp"
              }
              company={"Carr"}
              website={"https://carr.com"}
            />
            <Accounts logo={""} company={"Darr"} website={"https://darr.com"} />
          </div>
        ) : (
          <div>
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
        )}
      </div>
    </div>
  );
}
