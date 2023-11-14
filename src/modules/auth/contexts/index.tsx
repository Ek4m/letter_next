import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IUser } from "../types";
import { useGetUser } from "../hooks";

interface AuthContextType {
  userData?: IUser;
  refetch(): void;
  refresh(): void;
  isAdmin: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  isAuthed: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  userData: undefined,
  refetch() {},
  refresh() {},
  isLoading: false,
  isAdmin: false,
  isRefreshing: true,
  isAuthed: false,
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data, refetch, isFetching } = useGetUser();
  const [isRefreshing, setIsRefreshing] = useState(true);

  useEffect(() => {
    if (!isFetching) setIsRefreshing(false);
  }, [data, isFetching]);

  const isAuthed = useMemo(() => {
    return !!data;
  }, [data]);

  const refresh = useCallback(async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  }, [refetch]);

  const isAdmin = useMemo(() => {
    return !!data && data.role === "APP_ADMIN";
  }, [data]);

  return (
    <AuthContext.Provider
      value={{
        userData: data,
        isAdmin,
        refetch,
        isRefreshing,
        isLoading: isFetching,
        isAuthed,
        refresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
