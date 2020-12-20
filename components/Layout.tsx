import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {
  title: string;
}

const Layout: NextPage<Props> = ({ children, title }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header />
      <p>Route is: {router.pathname}</p>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
