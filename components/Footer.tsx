import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { withTranslation } from "../i18n";

interface Props {
  readonly t: TFunction;
}

const Footer: NextPage<Props> = ({ t }) => (
  <footer>
    <p>{t("description")}</p>
  </footer>
);

export default withTranslation("footer")(Footer);
