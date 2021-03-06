import Styles from "../Styles/Sidebar.module.css";
import Shape from "../components/Icons/Shape";
import Home from "../components/Icons/Home";
import Intel from "./Icons/Intel";
import Leads from "../components/Icons/Leads";
import Accounts from "../components/Icons/Accounts";
import Preferences from "../components/Icons/Preferences";
import Integrations from "../components/Icons/Integrations";
import Teams from "../components/Icons/Teams";
import Help from "../components/Icons/Help";
import Downarrow from "../components/Icons/Downarrow";
import Uparrow from "../components/Icons/Uparrow";
import { useState } from "react";

const Sidebar = (props) => {
  const [isAccountsClicked, setIsAcoountsClicked] = useState(false);
  const [isPreferencesClicked, setIsPreferencesClicked] = useState(false);

  const handleAccountClick = () => {
    setIsAcoountsClicked((status) => !status);
  };

  const handlePreferencesClick = () => {
    setIsPreferencesClicked((status) => !status);
  };

  return (
    <div className={Styles.Sidebar}>
      <div className={Styles.Sidebar_logo}>
        <div className={Styles.icon_element}>
          <Shape />
        </div>
        <div className={Styles.header_element}>B2Brain</div>
      </div>
      <div className={Styles.elements}>
        <div className={Styles.dashboard_icon}>
          <div>
            <Home height={"20px"} />
          </div>
          <div className={Styles.dashboard}>Dashboard</div>
        </div>
        <div className={Styles.intel_item}>
          <div className={Styles.items}>
            <div>
              <Intel />
            </div>
            <div>Intel</div>
          </div>
          <div className={Styles.unread_intel}>4 unread</div>
        </div>
        <div className={Styles.leads_item}>
          <div className={Styles.items}>
            <div>
              <Leads />
            </div>
            <div> Leads </div>
          </div>
          <div className={Styles.unseen_leads}>4 unseen</div>
        </div>
        <div>
          <div className={Styles.uparrow}>
            <div className={Styles.items}>
              <div>
                <Accounts />
              </div>
              <div> Accounts</div>
            </div>
            <div onClick={handleAccountClick}>
              {isAccountsClicked ? <Downarrow /> : <Uparrow />}
            </div>
          </div>
          <div style={{ display: isAccountsClicked ? "block" : "none" }}>
            <ul className={Styles.list_item}>
              <li>Manage all</li>
              <li>Track new accounts</li>
              <li>Bulk Import</li>
            </ul>
          </div>
        </div>
        <div>
          <div className={Styles.uparrow}>
            <div className={Styles.items}>
              <div>
                <Preferences />
              </div>
              <div> Preferences</div>
            </div>
            <div onClick={handlePreferencesClick}>
              {isPreferencesClicked ? <Downarrow /> : <Uparrow />}
            </div>
          </div>
          <div style={{ display: isPreferencesClicked ? "block" : "none" }}>
            <ul className={Styles.list_item}>
              <li>product Focus</li>
              <li>Intel preferences</li>
              <li>Lead Persona</li>
            </ul>
          </div>
        </div>
        <div className={Styles.items}>
          <div>
            <Integrations />
          </div>
          <div>Integrations</div>
        </div>
        <div className={Styles.items}>
          <div>
            <Teams />
          </div>
          <div>Teams</div>
        </div>
        <div className={Styles.items}>
          <div>
            <Help />
          </div>
          <div>Help</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
