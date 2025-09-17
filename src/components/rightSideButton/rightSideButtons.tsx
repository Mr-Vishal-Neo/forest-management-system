import buttonCss from "./rightSideButtons.module.scss";
import { useNavigate } from "react-router-dom";
import type { ButtonIconInterface } from "../../types/types";
import { Icons } from "../../assets/icons/icons";

const RightSideButtons = ({ isPanelOpen = false }: ButtonIconInterface) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    // navigate('/profile');
    navigate("/");
  };

  const handleChatClick = () => {};
  return (
    <div
      className={`${buttonCss["frs-buttonIcon__wrap"]} ${
        isPanelOpen ? buttonCss["frs-buttonIcon__wrap--panel-open"] : ""
      }`}
    >
      <button
        className={buttonCss["frs-buttonIcon__button"]}
        onClick={handleChatClick}
        id="chatbot"
      >
        <img
          src={Icons?.chatBoat}
          alt="chatbot-icon"
          className={buttonCss["frs-buttonIcon__chatbot"]}
          id="chatbot-icon"
        />
      </button>
      <button className={buttonCss["frs-buttonIcon__button"]} id="profile">
        {/* <span className={buttonCss["frs-buttonIcon__dot"]} /> */}
        <img
          src={Icons?.userProfile}
          alt="profile-icon"
          className={buttonCss["frs-buttonIcon__contact"]}
          onClick={handleProfileClick}
          id="profile-icon"
        />
      </button>
    </div>
  );
};

export default RightSideButtons;
