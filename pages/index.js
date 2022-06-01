import Head from "next/head";
import Content from "../components/Content";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Advice Generator App</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="An app to give you an advice!" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Content />
      </main>
    </>
  );
}
