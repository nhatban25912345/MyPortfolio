import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import { AiOutlineUser } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { useRef, useState } from "react";

const cx = classNames.bind(styles);

function Header() {

  const [navbarStatus, setNavbarStatus] = useState(true);
  // const [navbarPosition, setNavbarPosition] = useState(window.scrollY);
  // let scrollStatus = useRef("down");
  
  // const handleScrollStatus = () => {
  //   const newPosition = window.scrollY;
    
  //   if ( navbarPosition > newPosition ) {
  //     scrollStatus.current = "up";
  //   } else if (navbarPosition < newPosition) {
  //     scrollStatus.current = "down";
  //   }
  // }

  const handleNavbar = () => {
    // handleScrollStatus();
    if ( window.scrollY >= 70 ) {
      setNavbarStatus(false)
    } else {
      setNavbarStatus(true)
    }
    // setNavbarPosition(window.scrollY);
    // console.log(scrollStatus.current);
    console.log(window.scrollY);
  }

  window.addEventListener("scroll", handleNavbar);

  return (
    <div 
      className={
        navbarStatus ? cx("wrapper") : cx("wrapper","active")
      }
    >
      <div className={cx("inner")}>
        <div className={cx("left-block")}>
          <div className={cx("logo-wrapper")}>
            <AiOutlineUser className={cx("logo")} />
            <span>HoangNhat</span>
          </div>
          <ul className={cx("mid-block")}>
            <li className={cx("nav-item")}>
              <Link className={cx("nav-link")} smooth={500} onClick={()=>{scroll.scrollToTop()}}>
                <span data-hover="About">About</span>
              </Link>
            </li>
            <li className={cx("nav-item")}>
              <Link className={cx("nav-link")} to="project" smooth={500}>
                <span data-hover="Project">Project</span>
              </Link>
            </li>
             <li className={cx("nav-item")}>
              <Link className={cx("nav-link")} to="information" smooth={500}>
                <span data-hover="Information">Information</span>
              </Link>
            </li>
            <li className={cx("nav-item")}>
              <Link className={cx("nav-link")} to="contact" smooth={500}>
                <span data-hover="Contact">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={cx("right-block")} >
          <FiMoon className={cx("logo-theme-mode")}/>
          <span className={cx("title-them-mode")}>Color mode</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
