import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const COOKIE_NAME = "accept_cookies";

export default function useAccepCookie() {
  const [acceptedCookie, setAcceptedCookie] = useState(true);

  useEffect(() => {
    if (!Cookies.get(COOKIE_NAME)) {
      setAcceptedCookie(false);
    }
  }, []);

  function acceptCookie() {
    setAcceptedCookie(true);
    Cookies.set(COOKIE_NAME, "accepted", { expires: 7 });
  }

  return {
    acceptedCookie,
    acceptCookie,
  };
}
