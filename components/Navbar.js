import Styles from "../Styles/Navbar.module.css";
import Search from "./Icons/Search";
import Bell from "./Icons/Bell";
import Image from "next/image";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.searchbar_a}>
        <div className={Styles.searchbar}>
          <div>
            <Search />
          </div>
          <div className={Styles.input}>
            <input type={"text"} placeholder={"Search by account name or website"} />
          </div>
        </div>
        <div className={Styles.Bell_a}>
          <div className={Styles.bell}>
            <Bell />
          </div>
          <div className={Styles.logo}> 
            <Image src={Logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
