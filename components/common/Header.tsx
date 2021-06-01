import useKeyPress from "hooks/useKeyPress";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import React, { useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { SiteConfigNav } from "../../config/general";
import Cart from "../commerce/Cart";
import Navbar from "./Navbar";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);

interface HeaderProps {
  navLinks: SiteConfigNav;
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);
  const handleCart = () => setCartOpen(!cartOpen);
  const closeCart = () => setCartOpen(false);

  const { cartCount } = useShoppingCart();
  const router = useRouter();

  // router.events.on("routeChangeComplete", closeDrawers);
  function closeDrawers() {
    if (menuOpen) {
      setMenuOpen(false);
    }
    if (cartOpen) {
      setCartOpen(false);
    }
  }

  useEffect(() => {
    // const handleRouteChange = (url, { shallow }) => {

    //   closeDrawers();
    // };

    router.events.on("routeChangeStart", closeDrawers);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", closeDrawers);
    };
  }, []);

  useEffect(() => {
    !cartOpen && cartCount > 0 ? handleCart() : null;
  }, [cartCount]);

  const escapePress = useKeyPress("Escape");

  useEffect(() => {
    if (escapePress) {
      closeDrawers();
    }
  }, [escapePress]);
  return (
    <>
      {/* <header className=" body-font fixed text-gray-400 top-0 w-full z-50"> */}
      <header className="body-font fixed text-gray-400 top-0 w-full z-50">
        <Navbar navLinks={navLinks} handleCart={handleCart} />
      </header>
      <div className="placehoolder relative top-0 w-full h-16"></div>
      <Cart closeHandler={closeCart} cartOpen={cartOpen} />
    </>
  );
};

export default Header;
