import "../styles/index.css";
import Layout from "../components/Layout";
import { AppProps } from "next/app";
import Cart from "components/commerce/Cart";

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
