import Styles from "../Styles/Accounts.module.css";
import Logo from "../assets/Logo.png";
import Image from "next/image";
import { useState } from "react";

const Accounts = (props) => {
  const [isTracking, setIsTracking] = useState(false);

  const handleTracking = () => {
    setIsTracking(true);
  };

  const logTracking = () => {
    console.log(
      `${props.company} (${props.slug}) tracked at ${new Date().toDateString()}`
    );
  };

  return (
    <div>
      <div className={Styles.accounts_container}>
        <div className={Styles.accounts_Subcontainer}>
          <div className={Styles.accounts_logo}>
            {props.logo ? (
              <img
                src={props.logo}
                alt="logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <div className={Styles.accounts_company_logo_name}>
                {props.company[0]}
              </div>
            )}
          </div>
          <div>
            <div className={Styles.company_name}>{props.company}</div>
            <div className={Styles.company_website}>{props.website}</div>
          </div>
        </div>
        {isTracking ? (
          <button
            onClick={logTracking}
            className={Styles.button_container_green}
          >
            Tracking
          </button>
        ) : (
          <button
            onClick={handleTracking}
            className={Styles.button_container_red}
          >
            Track
          </button>
        )}
      </div>
    </div>
  );
};

export default Accounts;
