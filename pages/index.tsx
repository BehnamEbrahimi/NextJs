import Image from "next/image";
import { TFunction } from "next-i18next";
import { withTranslation } from "../i18n";
import translator from "../utils/translator";
import {
  HomeTranslationContext,
  homeTranslationKeys,
} from "../contexts/TranslationsContexts";
import Layout from "../components/Layout";
import Showcase from "../components/Showcase";

const LandingPage = ({ t }: { readonly t: TFunction }) => {
  return (
    <Layout title="Home">
      <HomeTranslationContext.Provider
        value={translator(t, homeTranslationKeys) as any}
      >
        <Showcase />
        <Image
          src="/static/images/yoda.jpg"
          alt="Yoda"
          width={500}
          height={500}
        />
      </HomeTranslationContext.Provider>
    </Layout>
  );
};

LandingPage.getInitialProps = async () => {
  return {
    namespacesRequired: ["common", "header", "footer"],
  };
};

export default withTranslation("common")(LandingPage);
