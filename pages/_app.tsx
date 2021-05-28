import "../styles/index.css";
import "intersection-observer";
import "nprogress/nprogress.css";
import Layout from "../components/common/Layout";
import { AppProps } from "next/app";
import Cart from "components/commerce/CartState";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import dynamic from "next/dynamic";
import "react-jinke-music-player/assets/index.css";
import { MusicProvider } from "components/music-player/music-context";

const PlayerWithNoSSR = dynamic(
  () => import("../components/music-player/Player"),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Cart>
      <MusicProvider>
        <Layout>
          <Component {...pageProps} />
          <PlayerWithNoSSR />
        </Layout>
      </MusicProvider>
    </Cart>
  );
}

export default MyApp;
