import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider as URQLProvider } from "urql";

import Fonts from "#theming/fonts";
import { customTheme } from "#theming/index";
import { AuthProvider } from "#lib/auth/AuthProvider";
import { URQLClient } from "#lib/client";

const client = URQLClient();

const REFETCH_INTERVAL_IN_MINUTES = 5;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider refetchInterval={REFETCH_INTERVAL_IN_MINUTES * 60}>
      <URQLProvider value={client}>
        <ChakraProvider resetCSS theme={customTheme}>
          <Fonts />
          <Component {...pageProps} />
        </ChakraProvider>
      </URQLProvider>
    </AuthProvider>
  );
};

export default MyApp;
