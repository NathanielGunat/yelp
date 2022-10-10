import Head from "next/head";
import Nav from "../nav/Nav";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="w-screen h-screen lg:grid lg:grid-rows-[min-content,1fr,1fr] lg:grid-cols-2">
        {children}
      </main>
    </>
  );
}
