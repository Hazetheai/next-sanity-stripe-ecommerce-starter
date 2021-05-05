import useKeyPress from "hooks/useKeyPress";
import NextLink from "next/link";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import React, { useEffect, useState } from "react";
import Cart from "../commerce/Cart";
import Link from "../elements/Link";
import { SiteConfigNav } from "../../config/general";

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

  const escapePress = useKeyPress("Escape");

  useEffect(() => {
    if (escapePress) {
      closeDrawers();
    }
  }, [escapePress]);
  return (
    <>
      <header className="bg-gray-900 body-font fixed text-gray-400 top-0 w-full z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NextLink href="/" passHref>
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-3 text-xl">Tailblocks</span>
            </a>
          </NextLink>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {navLinks && (
              <ul>
                {navLinks?.map((link) => (
                  <Link
                    key={link["slug"].current}
                    hrefProp={link["slug"].current}
                    text={link["page"].title}
                    icon={{ name: "none" }}
                  />
                ))}
              </ul>
            )}
          </nav>
          <div className="flex items-center mr-5">
            <div
              tabIndex={0}
              role="button"
              onClick={handleCart}
              className="text-gray-600 focus:outline-none mx-4 sm:mx-0 flex relative"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {/* {cartCount} */}
              {/* {cartOpen && (
              <FloatingCart
                closeHandler={closeDrawers}
                cartDetails={cartDetails}
                cartItems={Object.values(cartDetails)}
                removeItem={removeItem}
              />
            )} */}
            </div>
            <div className="flex md:hidden">
              <button
                onClick={handleMenu}
                type="button"
                className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button> */}
          {/* <Button text="Button" btnStyle="primary" /> */}
          <Link hrefProp="products" text="Shop" btnStyle="primary" />
        </div>
      </header>
      <div className="placehoolder relative top-0 w-full h-20"></div>
      <Cart closeHandler={closeCart} cartOpen={cartOpen} />
    </>
  );
};

export default Header;

/**
 *   <header>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="hidden w-full text-gray-600 md:flex md:items-center">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                  fill="currentColor"
                />
              </svg>
              <span className="mx-1 text-sm">NY</span>
            </div>
            <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
              Pulp Inc.
            </div>
             <div className="flex items-center justify-end w-full ">
              <div
                tabIndex={0}
                role="button"
                onClick={handleCart}
                className="text-gray-600 focus:outline-none mx-4 sm:mx-0 flex relative"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount}
                {cartOpen && (
                  <FloatingCart
                    closeHandler={closeDrawers}
                    cartDetails={cartDetails}
                    cartItems={Object.values(cartDetails)}
                    removeItem={removeItem}
                  />
                )}
              </div>
              <div className="flex sm:hidden">
                <button
                  onClick={handleMenu}
                  type="button"
                  className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  </svg>
                </button>
              </div>
            </div> 
            </div>
            <nav className={` sm:flex sm:justify-center sm:items-center mt-4`}>
              <div className="flex flex-col sm:flex-row">
                <Link href="/">
                  <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                    Home
                  </a>
                </Link>
                <Link href="/shop">
                  <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                    Shop
                  </a>
                </Link>
                <Link href="/all-about-us">
                  <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                    About
                  </a>
                </Link>
                <Link href="/use-shopping-cart">
                  <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                    Cart
                  </a>
                </Link>
                <Link href="/donate-with-checkout">
                  <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                    Checkout
                  </a>
                </Link>
              </div>
            </nav>
            <div className="relative mt-6 max-w-lg mx-auto">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
  
              <input
                className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </header>
 */
