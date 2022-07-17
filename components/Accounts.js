import Styles from "../Styles/Accounts.module.css";
import Logo from "../assets/Logo.png";
import Image from "next/image";
import { useState } from "react";

const Accounts = (props) => {
  const [isTracking, setIsTracking] = useState(false);

  const handleTracking = () => {
    setIsTracking(true);
  };

  const handleStopTracking = () => {
    setIsTracking(false);
  };

  return (
    <div>
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
            <div>
              <button
                onClick={handleTracking}
                className={Styles.button_container_green}
              >
                <div className={Styles.buttton_text_green}>Tracking</div>
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={handleTracking}
                className={Styles.button_container_red}
              >
                <div className={Styles.buttton_text_red}>Track</div>
              </button>
            </div>
          )}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Accounts;
