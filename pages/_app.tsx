import App from "next/app";
import type { AppProps, AppContext } from "next/app";
import { appWithTranslation } from "../i18n";
import "../styles.scss";

const AppComponent = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

AppComponent.getInitialProps = async (appContext: AppContext) => {
  return {
    ...(await App.getInitialProps(appContext)),
  };
};

export default appWithTranslation(AppComponent);
