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

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      fetch(
        `https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${encodeURIComponent(
          search
        )}`
      )
        .then((response) => response.json())
        .then((data) => setSearchResults(data));
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
          <div className={Styles.account_container_items}>
            <div>
              <div className={Styles.accounts_heading}>Similar accounts</div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  width: "100%",
                  gap:'1rem'
                }}
              >
                {searchResults.map((result, index) => (
                  <Accounts key={index} {...result} />
                ))}
              </div>
            </div>
            <div>
              <div className={Styles.quick_actions}>Quick Actions</div>
              <div className={Styles.quick_actions_items}>
                <div className={Styles.action_element}>Track new account</div>
                <div className={Styles.action_element}>Bulk track accounts</div>
                <div className={Styles.action_element}>Manage accounts</div>
              </div>
            </div>
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
