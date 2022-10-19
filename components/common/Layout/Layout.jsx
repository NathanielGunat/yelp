import cn from "clsx";
import Head from "next/head";
import s from "./layout.module.css";
import { useRouter } from "next/router";
import { Nav, Cookie } from "@components/common";
import { Button } from "@components/ui";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const rootClassName = cn("h-full", { [s.home]: pathname === "/" });

  return (
    <div className={s.root}>
      <Head>
        <title>Home</title>
      </Head>
      <main className={rootClassName}>
        <Nav pathname={pathname} />
        {children}
      </main>
      <Cookie
        title={
          "This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
        }
        action={<Button>Accept</Button>}
      />
    </div>
  );
}
