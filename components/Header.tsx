import { useEffect } from "react";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { withTranslation, Link, i18n } from "../i18n";

interface Props {
  readonly t: TFunction;
}

const Header: NextPage<Props> = ({ t }) => {
  useEffect(() => {
    console.log(i18n.language);
  }, [i18n.language]);

  return (
    <header>
      <h1>{t("text")}</h1>
      <button
        type="button"
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "de" : "en")
        }
      >
        {t("change-locale")}
      </button>
      <Link href="/">
        <a>{t("back-to-home")}</a>
      </Link>
      <Link href="/about">
        <a>{t("go-to-about")}</a>
      </Link>
    </header>
  );
};

export default withTranslation("header")(Header);
