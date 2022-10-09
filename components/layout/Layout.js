import Head from "next/head";
import Nav from "../nav/Nav";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <main>{children}</main>
    </>
  );
}
