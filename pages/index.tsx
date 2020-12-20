import { TFunction } from "next-i18next";
import { withTranslation } from "../i18n";
import translator from "../utils/translator";
import {
  HomeTranslationContext,
  homeTranslationKeys,
} from "../contexts/TranslationsContexts";
import Layout from "../components/Layout";
import Showcase from "../components/Showcase";
import Boxes from "../components/Boxes";

const LandingPage = ({ t }: { readonly t: TFunction }) => {
  return (
    <Layout title="Home">
      <HomeTranslationContext.Provider
        value={translator(t, homeTranslationKeys) as any}
      >
        <Showcase />
        <Boxes />
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
