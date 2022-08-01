import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const theme = {
    colors: {
      brand: "#0079bf",
      success: "#70b500",
      danger: "#eb5a46",
    },
  };
  // chakra theme
  // const theme = extendTheme({
  //   colors: {
  //     brand: "#0079bf",
  //     success: "#70b500",
  //     danger: "#eb5a46",
  //     info: "#ff9f1a",
  //     warning: "#f2d600",
  //     darkblue: "#eae6ff",
  //     lightblue: "#f2faf9",
  //     performance: "#0079bf",
  //     bug: "#eb5a46",
  //     feature: "#61bd4f",
  //     information: "#ff9f1a",
  //   },
  // });
  return (
    // <ChakraProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
    // </ChakraProvider>
  );
}

export default MyApp;
