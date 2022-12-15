import styles from "./.module.css";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiSnapchatLine } from "react-icons/ri";
import { memo } from "react";
const Footer = () => {
  return (
    <>
      <div
        className={`${styles.footerBg}
        d-flex flex-wrap 
        justify-content-around 
        fw-bold
        fs-4
        py-4
        text-white
        `}
      >
        <p>copyright &#169; {new Date().getFullYear()}</p>
        <ul className="icon">
          <li>
            <a href="#facebook">
              <CiFacebook />
            </a>
          </li>
          <li>
            <a href="#instagram">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#snap">
              <RiSnapchatLine />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default memo(Footer);
