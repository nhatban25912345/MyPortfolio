import classNames from "classnames/bind";
import styles from "./NavbarMobile.module.scss";
import { Link } from "react-scroll";
import { FiMoon } from "react-icons/fi";
import { animateScroll as scroll } from "react-scroll";
import { useState } from "react";

import { HiMenu } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

const cx = classNames.bind(styles);

function NavbarDesktop() {
  const [navMobileOpen, setNavMobileOpen] = useState(false);
  console.log("navMobileOpen: ", navMobileOpen);
  const handToggleNavMobile = () => {
    setNavMobileOpen(!navMobileOpen);
  }

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // Example: scroll duration in milliseconds
    });
  };

  return (
    <div className={cx("wrapper")}  >
      <div className={cx("inner")}>
        <div className={cx("logo-wrapper")}>
          <AiOutlineUser className={cx("logo")} />
          <span>Hoang Nhat</span>
        </div>
        <div className={cx("nav-toggle")} onClick={handToggleNavMobile}>
          <HiMenu className={cx("bars-icon")} />
        </div>
        { navMobileOpen ? 
          <div className={cx("nav-menu-mobile")}>
          <ul className={cx("mid-block-mobile")}>
            <li className={cx("nav-item-mobile")}>
              <Link className={cx("nav-link")} to="/" smooth={true} onClick={() => { scrollToTop() }}>
                About
              </Link>
            </li>
            <li className={cx("nav-item-mobile")}>
              <Link className={cx("nav-link")} to="project" smooth={true}>
                Project
              </Link>
            </li>
            <li className={cx("nav-item-mobile")}>
              <Link className={cx("nav-link")} to="information" smooth={true}>
                Information
              </Link>
            </li>
            <li className={cx("nav-item-mobile")}>
              <Link className={cx("nav-link")} to="contact" smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
          <div className={cx("right-block-mobile")} >
            <div className={cx("toggle-theme-btn")}>
              <FiMoon className={cx("logo-theme-mode")} />
              <span className={cx("title-them-mode")}>Color mode</span>
            </div>
            <div className={cx("nav-toggle-mobile")} onClick={handToggleNavMobile}>
              <HiMenu className={cx("bars-icon")} />
            </div>
          </div>
        </div>
        : undefined}
      </div>
    </div>
  );
}

export default NavbarDesktop;