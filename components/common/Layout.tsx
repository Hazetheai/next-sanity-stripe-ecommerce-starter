import Footer from "./Footer";
import Header from "./Header";
import SiteConfig from "config/general";

function Layout({ children }) {
  return (
    <div className="bg-black relative">
      <Header navLinks={SiteConfig.mainNavigation} />
      <main className="">{children}</main>
      <Footer navigation={SiteConfig.footerNavigation} />
    </div>
  );
}

export default Layout;
