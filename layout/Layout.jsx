import Head from "next/head";

export default function Layout_Home({ children }) {
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
