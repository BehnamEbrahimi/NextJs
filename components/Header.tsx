import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { withTranslation } from "../i18n";
import translator from "../utils/translator";
import {
  HeaderTranslationContext,
  headerTranslationKeys,
} from "../contexts/TranslationsContexts";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

interface Props {
  readonly t: TFunction;
}

const Header: NextPage<Props> = ({ t }) => {
  return (
    <HeaderTranslationContext.Provider
      value={translator(t, headerTranslationKeys) as any}
    >
      <header>
        <TopBar />
        <NavBar />
      </header>
    </HeaderTranslationContext.Provider>
  );
};

export default withTranslation("header")(Header);
