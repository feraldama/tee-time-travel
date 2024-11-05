import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Time Tee Travel - Agencia de Viajes de Golf"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-sans">{children}</main>
    </>
  );
};

export default Layout;
