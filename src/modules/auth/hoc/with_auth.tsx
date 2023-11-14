import React, { useContext } from "react";
import { AuthContext } from "../contexts";
import { useRouter } from "next/router";
import { LoadingScreen } from "../components";

export function withAuth(
  WrappedComponent: React.ComponentType,
  checkAdmin = false
) {
  return function WithAuth(props: any) {
    const { isAuthed, isAdmin, isRefreshing } = useContext(AuthContext);
    const router = useRouter();
    if (isRefreshing) return <LoadingScreen />;
    if (!isAuthed) {
      router.push("/login");
      return null;
    } else if (checkAdmin) {
      if (isAdmin) {
        return <WrappedComponent {...props} />;
      } else {
        router.push("/");
        return null;
      }
    } else {
      return <WrappedComponent {...props} />;
    }
  };
}
