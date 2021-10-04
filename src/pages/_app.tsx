import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider as URQLProvider } from "urql";

import Fonts from "#theming/fonts";
import { customTheme } from "#theming/index";
import { URQLClient } from "#lib/client";

const client = URQLClient();

const FairpayApp = ({ Component, pageProps }: AppProps) => {
  return (
    <URQLProvider value={client}>
      <ChakraProvider resetCSS theme={customTheme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </URQLProvider>
  );
};

export default FairpayApp;
