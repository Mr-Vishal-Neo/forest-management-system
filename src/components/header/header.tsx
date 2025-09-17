import headerCss from './header.module.scss'
import { Icons } from "../../assets/icons/icons";
const Header = () => {
  return (
    <div className={headerCss["frs-header__wrap"]}>
      <div className={headerCss["frs-header__search"]}>
        <input
          type="text"
          placeholder="Search"
          className={headerCss["frs-header__input"]}
        />
        <img
          src={Icons?.citySearch}
          alt="Search"
          className={headerCss["frs-header__search-icon"]}
        />
      </div>

      <div className={headerCss["frs-header__right-icons"]}>
        <img
          src={Icons?.chatBoat}
          alt="Chat Bot"
          className={headerCss["frs-header__icon"]}
        />
        <img
          src={Icons?.userProfile}
          alt="User Profile"
          className={headerCss["frs-header__icon"]}
        />
      </div>
    </div>
  );
};

export default Header;
