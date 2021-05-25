import "../styles/index.css";
import "intersection-observer";
import "nprogress/nprogress.css";
import Layout from "../components/common/Layout";
import { AppProps } from "next/app";
import Cart from "components/commerce/CartState";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Cart>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Cart>
  );
}

export default MyApp;
