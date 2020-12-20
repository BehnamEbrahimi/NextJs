import { TFunction } from "next-i18next";
import { withTranslation } from "../i18n";
import Layout from "../components/Layout";

const About = ({ t }: { readonly t: TFunction }) => {
  return (
    <Layout title="About">
      <p>{t("text")}</p>
    </Layout>
  );
};

About.getInitialProps = async () => {
  console.log("22");

  return {
    namespacesRequired: ["about", "footer", "header"],
  };
};

export default withTranslation("about")(About);
