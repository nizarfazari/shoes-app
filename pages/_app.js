'use client'
import { DefaultLayouts } from "@/layouts/DefaultLayouts";
import ChakraTheme from "@/styles/chakra-theme";
import "@/styles/main.scss";
import { ChakraProvider } from '@chakra-ui/react'

export default function MyApp({ Component, pageProps }) {
  const Layout = Component?.layout || DefaultLayouts;
  return (
    <ChakraProvider theme={ChakraTheme}>
      <div id="layout">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ChakraProvider>

  );
}