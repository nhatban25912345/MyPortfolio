import NavbarDesktop from "./Menu/NavbarDesktop";
import NavbarMobile from "./MenuMobile/NavbarMobile";

function Header() {

  const isMobile = window.innerWidth < 900 ? true : false;

  return  isMobile ? <NavbarMobile /> : <NavbarDesktop />;
}

export default Header;
