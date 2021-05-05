import Footer from "./Footer";
import Header from "./Header";
import SiteConfig from "config/general";

function Layout({ children }) {
  return (
    <div className="bg-white relative">
      <Header navLinks={SiteConfig.mainNavigation} />
      <main className="my-8">{children}</main>
      <Footer navigation={SiteConfig.footerNavigation} />
    </div>
  );
}

export default Layout;
