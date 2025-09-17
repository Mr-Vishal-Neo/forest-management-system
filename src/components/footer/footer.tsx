import footerCss from "./footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={footerCss["frs-footer__wrap"]}>
      <Link to={""}>Help Center</Link>
      <Link to={""}>Terms of Service</Link>
      <Link to={""}>Privacy Policy</Link>
      <span>©2025 Genesys</span>
    </footer>
  );
};

export default Footer;
