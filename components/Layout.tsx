import { NextPage } from "next";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  title: string;
}

const Layout: NextPage<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
