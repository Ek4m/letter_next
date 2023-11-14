import React, { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { __access_token, __refresh_token } from "@/constants";
import { AuthContext } from "@/modules/auth/contexts";

const LogoutPage = () => {
  const { refresh } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    Cookies.remove(__access_token);
    Cookies.remove(__refresh_token);
    refresh();
    router.push("/login");
  }, [refresh, router]);
  return null;
};

export default LogoutPage;
