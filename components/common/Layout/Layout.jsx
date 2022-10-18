import Head from "next/head";
import s from "./layout.module.css";
import Nav from "@components/common/Nav";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={s.home}>
        <Nav />
        {children}
      </main>
    </>
  );
}
