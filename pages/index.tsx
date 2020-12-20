import Image from "next/image";
import { TFunction } from "next-i18next";
import { withTranslation } from "../i18n";
import Button from "../components/Button";
import Layout from "../components/Layout";

const LandingPage = ({ t }: { readonly t: TFunction }) => {
  return (
    <Layout title="Home">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
        laborum exercitationem quod mollitia est saepe quo modi. Consequatur ad
        architecto ut at sapiente. Omnis blanditiis accusantium, numquam ea
        eaque laboriosam! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Voluptas laborum exercitationem quod mollitia est saepe quo modi.
        Consequatur ad architecto ut at sapiente. Omnis blanditiis accusantium,
        numquam ea eaque laboriosam! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Voluptas laborum exercitationem quod mollitia est
        saepe quo modi. Consequatur ad architecto ut at sapiente. Omnis
        blanditiis accusantium, numquam ea eaque laboriosam! Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Voluptas laborum exercitationem
        quod mollitia est saepe quo modi. Consequatur ad architecto ut at
        sapiente. Omnis blanditiis accusantium, numquam ea eaque laboriosam!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
        laborum exercitationem quod mollitia est saepe quo modi. Consequatur ad
        architecto ut at sapiente. Omnis blanditiis accusantium, numquam ea
        eaque laboriosam! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Voluptas laborum exercitationem quod mollitia est saepe quo modi.
        Consequatur ad architecto ut at sapiente. Omnis blanditiis accusantium,
        numquam ea eaque laboriosam! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Voluptas laborum exercitationem quod mollitia est
        saepe quo modi. Consequatur ad architecto ut at sapiente. Omnis
        blanditiis accusantium, numquam ea eaque laboriosam! Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Voluptas laborum exercitationem
        quod mollitia est saepe quo modi. Consequatur ad architecto ut at
        sapiente. Omnis blanditiis accusantium, numquam ea eaque laboriosam!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
        laborum exercitationem quod mollitia est saepe quo modi. Consequatur ad
        architecto ut at sapiente. Omnis blanditiis accusantium, numquam ea
        eaque laboriosam! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Voluptas laborum exercitationem quod mollitia est saepe quo modi.
        Consequatur ad architecto ut at sapiente. Omnis blanditiis accusantium,
        numquam ea eaque laboriosam! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Voluptas laborum exercitationem quod mollitia est
        saepe quo modi. Consequatur ad architecto ut at sapiente. Omnis
        blanditiis accusantium, numquam ea eaque laboriosam! Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Voluptas laborum exercitationem
        quod mollitia est saepe quo modi. Consequatur ad architecto ut at
        sapiente. Omnis blanditiis accusantium, numquam ea eaque laboriosam!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
        laborum exercitationem quod mollitia est saepe quo modi. Consequatur ad
        architecto ut at sapiente. Omnis blanditiis accusantium, numquam ea
        eaque laboriosam! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Voluptas laborum exercitationem quod mollitia est saepe quo modi.
        Consequatur ad architecto ut at sapiente. Omnis blanditiis accusantium,
        numquam ea eaque laboriosam! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Voluptas laborum exercitationem quod mollitia est
        saepe quo modi. Consequatur ad architecto ut at sapiente. Omnis
        blanditiis accusantium, numquam ea eaque laboriosam! Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Voluptas laborum exercitationem
        quod mollitia est saepe quo modi. Consequatur ad architecto ut at
        sapiente. Omnis blanditiis accusantium, numquam ea eaque laboriosam!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
        laborum exercitationem quod mollitia est saepe quo modi. Consequatur ad
        architecto ut at sapiente. Omnis blanditiis accusantium, numquam ea
        eaque laboriosam! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Voluptas laborum exercitationem quod mollitia est saepe quo modi.
        Consequatur ad architecto ut at sapiente. Omnis blanditiis accusantium,
        numquam ea eaque laboriosam! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Voluptas laborum exercitationem quod mollitia est
        saepe quo modi. Consequatur ad architecto ut at sapiente. Omnis
        blanditiis accusantium, numquam ea eaque laboriosam! Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Voluptas laborum exercitationem
        quod mollitia est saepe quo modi. Consequatur ad architecto ut at
        sapiente. Omnis blanditiis accusantium, numquam ea eaque laboriosam!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
        laborum exercitationem quod mollitia est saepe quo modi. Consequatur ad
        architecto ut at sapiente. Omnis blanditiis accusantium, numquam ea
        eaque laboriosam! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Voluptas laborum exercitationem quod mollitia est saepe quo modi.
        Consequatur ad architecto ut at sapiente. Omnis blanditiis accusantium,
        numquam ea eaque laboriosam! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Voluptas laborum exercitationem quod mollitia est
        saepe quo modi. Consequatur ad architecto ut at sapiente. Omnis
        blanditiis accusantium, numquam ea eaque laboriosam! Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Voluptas laborum exercitationem
        quod mollitia est saepe quo modi. Consequatur ad architecto ut at
        sapiente. Omnis blanditiis accusantium, numquam ea eaque laboriosam!
      </p>
      <Button text="click on me" />
      <p className="error">{t("text")}</p>
      <Image
        src="/static/images/yoda.jpg"
        alt="Yoda"
        width={500}
        height={500}
      />
    </Layout>
  );
};

LandingPage.getInitialProps = async () => {
  console.log("2");
  console.log(process.env.A);

  return {
    namespacesRequired: ["common", "footer", "header"],
  };
};

export default withTranslation("common")(LandingPage);
