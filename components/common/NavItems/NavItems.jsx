import { Button } from "@components/ui";
import Link from "next/link";
import { useState } from "react";

export default function NavLink() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const profile = isSignedIn ? (
    <>
      <Link href={"/user"}>johndoe</Link>
      <Link href={"/user"}>logout</Link>
    </>
  ) : (
    <>
      <Link href={"/user"}>login</Link>
      <Button>create an account</Button>
    </>
  );

  return (
    <div>
      <Link href="/"> home</Link>
      <div className="space-x-4">{profile}</div>
    </div>
  );
}
