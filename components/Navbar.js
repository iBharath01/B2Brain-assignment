import Styles from "../Styles/Navbar.module.css";
import Search from "./Icons/Search";
import Close from "./Icons/Close";
import Bell from "./Icons/Bell";
import Image from "next/image";
import Logo from "../assets/Logo.png";

const Navbar = (props) => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.searchbar_container}>
        <div className={Styles.search_icon}>
          <div>
            {props.isSearchbarOpen ? (
              <Close  onClick={props.clearSearchbar} height={"22px"} width={"16px"} />
            ) : (
              <Search />
            )}
          </div>
          <div>
            <input
              className={Styles.input_element}
              type={"text"}
              placeholder={"Search by account name or website"}
              onFocus={props.handleSearchbarFocus}
              onChange={props.handleSearch}
            />
          </div>
        </div>
        <div className={Styles.Bell_container}>
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
