import { useEffect } from "react";
import notFoundCss from "./notFound.module.scss";
import { Link } from "react-router-dom";
import { removeItem } from "../../utils/sessionStorageUtils";

const NotFound = () => {
  // const navigate = useNavigate();
  useEffect(() => {
    removeItem("access_token");
    // Optional: dispatch logout if using Redux
    // dispatch(logoutUser());

    // Redirect to login after some time (optional)
    // setTimeout(() => navigate("/login"), 5000);
  }, []);

  return (
    <div className={notFoundCss["frs-404__container"]}>
      <video
        className={notFoundCss["frs-404__video"]}
        src="/videos/oops-404-error.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={notFoundCss["frs-404__message"]}>
        <Link to="/" className={notFoundCss["frs-404__link"]}>
          Go to Login Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
