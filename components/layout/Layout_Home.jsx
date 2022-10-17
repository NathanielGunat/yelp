import Head from "next/head";

export default function Layout_Home({ page, children }) {
  return (
    <>
      <Head>
        <title>{page}</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
