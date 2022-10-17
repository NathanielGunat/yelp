import Head from "next/head";
import Nav_Camps from "../nav/Nav_Camps";

export default function Layout_Camps({ page, children }) {
  return (
    <>
      <Head>
        <title>{page}</title>
      </Head>
      <Nav_Camps />
      <main> {children} </main>
    </>
  );
}
