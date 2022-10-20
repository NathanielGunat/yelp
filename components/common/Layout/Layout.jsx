import cn from "clsx";
import Head from "next/head";
import s from "./layout.module.css";
import { useRouter } from "next/router";
import { Nav, Cookie } from "@components/common";
import { Button } from "@components/ui";
import { useAccepCookie } from "@lib/hooks/useAccepCookie";

export default function Layout({ children }) {
  const { pathname } = useRouter();

  const { acceptedCookie, acceptCookie } = useAccepCookie();
  const rootClassName = cn({ [s.home]: pathname === "/" });

  return (
    <>
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
        action={
          <Button variant="white" onClick={acceptCookie}>
            Accept
          </Button>
        }
        hide={acceptedCookie}
      />
    </>
  );
}
