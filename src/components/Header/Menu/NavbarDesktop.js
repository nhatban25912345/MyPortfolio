import classNames from "classnames/bind";
import styles from "./NavbarDesktop.module.scss";
import { Link } from "react-scroll";
import { FiMoon } from "react-icons/fi";
import { animateScroll as scroll } from "react-scroll";
import { useState } from "react";

import { HiMenu } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

const cx = classNames.bind(styles);

function NavbarDesktop() {
  const [navbarStatus, setNavbarStatus] = useState(true);

  const handleNavbar = () => {
    if ( window.scrollY >= 70 ) {
      setNavbarStatus(false)
    } else {
      setNavbarStatus(true)
    }
  }

  window.addEventListener("scroll", handleNavbar);
    const scrollToTop = () => {
        scroll.scrollToTop({
          duration: 500, // Example: scroll duration in milliseconds
        });
      };

    return (  
      <div 
      className={
        navbarStatus ? cx("wrapper") : cx("wrapper","active")
      }
    >
      <div className={cx("inner")}>
          <div className={cx("logo-wrapper")}>
            <AiOutlineUser className={cx("logo")} />
            <span>Hoang Nhat</span>
          </div>
      
          <div className={cx("nav-menu")}>
            <ul className={cx("mid-block")}>
              <li className={cx("nav-item")}>
                <Link className={cx("nav-link")} to="/" smooth={true} onClick={()=>{scrollToTop()}}>
                  <span data-hover="About">About</span>
                </Link>
              </li>
              <li className={cx("nav-item")}>
                <Link className={cx("nav-link")} to="project" smooth={true}>
                  <span data-hover="Project">Project</span>
                </Link>
              </li>
              <li className={cx("nav-item")}>
                <Link className={cx("nav-link")} to="information" smooth={true}>
                  <span data-hover="Information">Information</span>
                </Link>
              </li>
              <li className={cx("nav-item")}>
                <Link className={cx("nav-link")} to="contact" smooth={true}>
                  <span data-hover="Contact">Contact</span>
                </Link>
              </li>
            </ul>
            <div className={cx("right-block")} >
              <FiMoon className={cx("logo-theme-mode")}/>
              <span className={cx("title-them-mode")}>Color mode</span>
            </div>
          </div>
      </div>
    </div>
    );
}

export default NavbarDesktop;