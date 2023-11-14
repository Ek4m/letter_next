import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { QueryClientProvider, QueryClient } from "react-query";

import "@/styles/globals.css";
import { AuthProvider } from "@/modules/auth/contexts";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <QueryClientProvider client={queryClient}>
          <AuthProvider>
              <Component {...pageProps} />
          </AuthProvider>
      </QueryClientProvider>
    </ConfigProvider>
  );
}
